ALTER TABLE "user" RENAME COLUMN "roles" TO "role";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_id_unique";