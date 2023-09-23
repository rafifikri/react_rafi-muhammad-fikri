import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import Layout from "../components/layout";
import { Input } from "../components/input";
import Button from "../components/button";
import { useToken } from "../utils/token-context";

const schema = z.object({
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleLogin(data) {
    setToken(JSON.stringify(data));
    navigate("/createProduct");
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="mb-4 text-center font-bold text-2xl">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} className="w-full max-w-md">
          <Input
            register={register}
            name="email"
            label="Email"
            type="email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            name="password"
            label="Password"
            type="password"
            error={errors.password?.message}
          />
          <Button label="Submit" type="submit" />
        </form>
      </div>
    </Layout>
  );
}
