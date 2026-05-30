"use client";

import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(result?.error || "Login failed.");
      }

      window.location.href = "/admin";
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
      <div className="space-y-4">
        <input
          type="text"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setError("");
            setUsername(event.target.value);
          }}
          required
          className="w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 py-4 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-[#2f5b7c]"
        />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setError("");
            setPassword(event.target.value);
          }}
          required
          className="w-full rounded-2xl border border-black/10 bg-[#fafafa] px-5 py-4 text-sm text-black outline-none transition-colors placeholder:text-black/30 focus:border-[#2f5b7c]"
        />
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#2f5b7c] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
