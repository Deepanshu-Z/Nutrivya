CREATE TYPE "public"."cart_status" AS ENUM('active', 'completed', 'abandoned');--> statement-breakpoint
ALTER TABLE "cart" DROP CONSTRAINT "cart_userId_unique";--> statement-breakpoint
ALTER TABLE "cart" ADD COLUMN "status" "cart_status" DEFAULT 'active' NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "ratings" ADD COLUMN "userId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "ratings" ADD COLUMN "productId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "ratings" ADD COLUMN "rating" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "ratings" ADD COLUMN "comment" text;--> statement-breakpoint
ALTER TABLE "ratings" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings" DROP COLUMN "username";--> statement-breakpoint
ALTER TABLE "ratings" DROP COLUMN "comments";--> statement-breakpoint
ALTER TABLE "ratings" DROP COLUMN "images";