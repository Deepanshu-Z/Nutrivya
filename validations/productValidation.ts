import * as z from "zod";

export const categories = [
  "Uncategorized",
  "Health & Fitness",
  "Suppliments",
  "Skin",
  "Hygiene",
] as const;

export const form = ["powder", "capsule", "tablet", "liquid"] as const;

export const productSchema = z.object({
  name: z.string().min(4, "Name is required"),
  title: z.string().min(10, "Title must be atleas 10 words"),
  price: z.number().min(0, "Price is required"),

  discountPrice: z.number().positive().optional(),

  description: z.string().min(50, "Description is required"),
  stock: z.number().min(0, "Stock cannot be negative"),

  category: z.enum(categories).default("Uncategorized"),
  form: z.enum(form).default("capsule"),

  inStock: z.number().default(1),

  galleryImages: z
    .string()
    .transform((val) => val.split(",").map((s) => s.trim()))
    .optional(),
  goal: z.string().transform((val) => val.split(",").map((s) => s.trim())),
  ingredients: z
    .string()
    .transform((val) => val.split(",").map((s) => s.trim())),
  allergens: z.string().transform((val) => val.split(",").map((s) => s.trim())),
  directions: z.string().min(1, "Directions are required"),
  certifications: z
    .string()
    .transform((val) => val.split(",").map((s) => s.trim())),

  expiryDate: z.coerce.date(),
  manufacturedDate: z.coerce.date(),
});

export type ProductInput = z.infer<typeof productSchema>;
