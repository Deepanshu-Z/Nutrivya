CREATE TYPE "public"."medicineType" AS ENUM('powder', 'capsule', 'tablet', 'liquid');--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "medicine_type" "medicineType" DEFAULT 'capsule';