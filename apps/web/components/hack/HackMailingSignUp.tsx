"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

export const HackMailingSignUp: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: { email: "" },
    resolver: zodResolver(z.object({ email: z.string().email() })),
  });

  const onSubmit = async (data: { email: string }) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to sign up");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center gap-2">
      {status === "loading" ? (
        <LoaderCircle className="animate-spin" />
      ) : status === "success" ? (
        <p>
          <Check className="inline-block text-green-500" /> Signed up!
        </p>
      ) : (
        <>
          <form className="flex w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="flex-1"
            />

            <Button className="shrink-0" typeSubmit value="Sign up" />
          </form>

          {status === "error" ? (
            <p className="text-red-500">Failed to sign up</p>
          ) : errors.email ? (
            <p className="text-red-500">Please enter a valid email address</p>
          ) : null}
        </>
      )}
    </div>
  );
};
