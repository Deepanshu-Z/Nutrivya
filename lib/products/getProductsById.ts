import db from "@/db/db";
import { cartItems, products } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";

export const getProductsById = async (cartId: string) => {
  const response = await db
    .select()
    .from(cartItems)
    .where(eq(cartItems.cartId, cartId));

  const productIds = response.map((r) => r.productId);

  const productsData = await db
    .select({
      price: products.price,
      discountPrice: products.discountPrice,
    })
    .from(products)
    .where(inArray(products.id, productIds));

  console.log("@@@PRODUCTS DATA", productsData);

  const subtotal = productsData.reduce((sum, p) => {
    return sum + p.price;
  }, 0);

  const tax = (subtotal * 5) / 100;
  console.log(tax);
  const total = subtotal + tax;

  console.log("YOU FINAL PRICE IS:", total); // 2460 ✅

  return total;
};
