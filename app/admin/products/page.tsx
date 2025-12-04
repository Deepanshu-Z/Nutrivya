"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import axios from "axios";
const categories = [
  "Uncategorized",
  "Health & Fitness",
  "Suppliments",
  "Skin",
  "Hygiene",
] as const;

const form = ["powder", "capsule", "tablet", "liquid"] as const;

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().min(0, "Price is required"),

  discountPrice: z.number().positive().optional(),

  description: z.string().min(1, "Description is required"),
  stock: z.number().min(0, "Stock cannot be negative"),

  category: z.enum(categories).default("Uncategorized"),
  form: z.enum(form).default("capsule"),

  inStock: z.boolean().default(true),

  images: z.array(z.string()).optional(),
  goal: z.array(z.string()),
  ingredients: z.array(z.string()),
  allergens: z.array(z.string()),
  directions: z.string().min(1, "Directions are required"),
  certifications: z.array(z.string()),

  expiryDate: z.coerce.date(),
  manufacturedDate: z.coerce.date(),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });
  async function saveProduct(data: any) {
    const response = await axios.post("/api/admin/addproduct  ", data);
    console.log(response.data);
    if (response.data.success) console.log("product added!");
    else console.log("Please try again");
  }
  return (
    <form
      className="pt-50"
      onSubmit={handleSubmit((data) => saveProduct(data))}
    >
      {/* Basic fields */}
      <input {...register("name")} placeholder="Name" />
      <p>{errors.name?.message}</p>

      <input
        type="number"
        {...register("price", { valueAsNumber: true })}
        placeholder="Price"
      />
      <p>{errors.price?.message}</p>

      <input
        type="number"
        {...register("discountPrice", { valueAsNumber: true })}
        placeholder="Discount(If applicable)"
      />
      <p>{errors.price?.message}</p>
      <input
        type="number"
        {...register("stock", { valueAsNumber: true })}
        placeholder="Stock"
      />
      <p>{errors.stock?.message}</p>

      <input {...register("description")} placeholder="Description" />
      <p>{errors.description?.message}</p>

      {/* Required Arrays */}
      <input
        {...register("goal")}
        placeholder="Goal item 1 (required at least 1)"
      />
      <p>{errors.goal?.message}</p>

      <input {...register("ingredients")} placeholder="Ingredient item 1" />
      <p>{errors.ingredients?.message}</p>

      <input {...register("allergens")} placeholder="Allergen item 1" />
      <p>{errors.allergens?.message}</p>

      <input {...register("directions")} placeholder="Directions" />
      <p>{errors.directions?.message}</p>

      <input
        {...register("certifications")}
        placeholder="Certification item 1"
      />
      <p>{errors.certifications?.message}</p>

      {/* Required Dates */}
      <input type="date" {...register("expiryDate")} />
      <p>{errors.expiryDate?.message}</p>

      <input type="date" {...register("manufacturedDate")} />
      <p>{errors.manufacturedDate?.message}</p>

      {/* Selects */}
      <select {...register("category")}>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select {...register("form")}>
        {form.map((f) => (
          <option key={f} value={f}>
            {f}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
