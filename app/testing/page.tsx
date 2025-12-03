"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <form
      className="pt-40"
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn("email", {
          email,
          redirect: false,
        });
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Sign in with Email</button>
    </form>
  );
}
