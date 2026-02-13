ALTER TABLE "order_items" DROP CONSTRAINT "order_items_order_id_orders_order_id_fk";
--> statement-breakpoint
ALTER TABLE "order_items" ALTER COLUMN "quantity" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "currency" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "payments" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
CREATE INDEX "order_items_order_id_idx" ON "order_items" USING btree ("order_id");--> statement-breakpoint
CREATE INDEX "order_items_product_id_idx" ON "order_items" USING btree ("product_id");--> statement-breakpoint
CREATE INDEX "orders_user_id_idx" ON "orders" USING btree ("user_id");--> statement-breakpoint
ALTER TABLE "order_items" DROP COLUMN "created_at";