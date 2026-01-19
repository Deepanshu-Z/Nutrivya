import db from "@/db/db";
import { cartItems, products } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";

/**
 * Calculates final payable amount for a cart
 * - Uses DB prices (secure)
 * - Respects quantity
 * - Applies discount correctly
 * - Applies tax ONCE
 */
export const getProductsById = async (cartId: string) => {
  // 1️⃣ Fetch cart items (productId + quantity)
  const cartRows = await db
    .select({
      productId: cartItems.productId,
      quantity: cartItems.quantity,
    })
    .from(cartItems)
    .where(eq(cartItems.cartId, cartId));

  if (cartRows.length === 0) return 0;

  // 2️⃣ Extract product IDs
  const productIds = cartRows.map((c) => c.productId);

  // 3️⃣ Fetch product prices
  const productRows = await db
    .select({
      id: products.id,
      price: products.price,
      discountPrice: products.discountPrice,
    })
    .from(products)
    .where(inArray(products.id, productIds));

  // 4️⃣ Create quick lookup for quantity
  const quantityMap = new Map<string, number>();
  for (const item of cartRows) {
    quantityMap.set(item.productId, item.quantity);
  }

  // 5️⃣ Subtotal (after discount × quantity)
  const subtotal = productRows.reduce((sum, p) => {
    const quantity = quantityMap.get(p.id) ?? 0;
    const unitPrice = p.discountPrice ?? p.price;
    return sum + unitPrice * quantity;
  }, 0);

  // 6️⃣ Tax (5% once)
  const tax = (subtotal * 5) / 100;

  // 7️⃣ Final total
  const total = subtotal + tax;

  console.log("TOTAL PRICING IS: ", total);
  return total;
};
