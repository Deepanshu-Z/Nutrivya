ALTER TYPE "public"."roles" ADD VALUE 'support' BEFORE 'admin';--> statement-breakpoint
ALTER TABLE "chats" ALTER COLUMN "role" SET DEFAULT 'support';--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "in_stock" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "in_stock" SET DEFAULT '1';