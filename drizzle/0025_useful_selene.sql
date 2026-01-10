ALTER TABLE "products" ALTER COLUMN "in_stock" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "in_stock" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "in_stock" DROP NOT NULL;