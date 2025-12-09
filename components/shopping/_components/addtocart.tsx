import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { cart, cartItems, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { useSession } from "next-auth/react";

export default function AddToCart(id: any) {
  const { data: session, status } = useSession();

  const handleCart = async () => {
    //lookfor = DB
    if (status === "authenticated") {
      console.log("@@@@ SESSION ", session);
      //@ts-ignore
      const userId = session.user?.id;
      const existingCart = await db
        .select()
        .from(cart)
        .where(eq(cart.userId, userId));
      if (existingCart.length === 0) {
        //cart already exists find if the product exists on that cart
      } else {
        //cart does not exists first create new and then add new cart-item in that cart
      }
    }

    //lookfor = LOCAL-STORAGE
    else {
    }
  };
  return (
    <Button className="cursor-pointer" onClick={handleCart}>
      Add to Cart
    </Button>
  );
}
