"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().min(1, "Price must be > 0"),
  stock: z.number().min(0, "Stock cannot be negative"),
  description: z.string().min(5, "Description must be at least 5 chars"),
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  return (
    <form
      className="pt-50"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
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
        {...register("stock", { valueAsNumber: true })}
        placeholder="Stock"
      />
      <p>{errors.stock?.message}</p>

      <input {...register("description")} placeholder="Description" />
      <p>{errors.description?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}
