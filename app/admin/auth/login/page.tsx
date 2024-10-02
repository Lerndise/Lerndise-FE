"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AdminSigninImage from "@/public/AdminSignin.png";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputControl from "@/components/Form/InputControl";
import ScaleLoader from "react-spinners/ScaleLoader";
import { CSSProperties } from "react";
import axiosInstance from "@/services/api-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email().min(2),
  password: z
    .string()
    .min(7, { message: "Password must be up to 7 characters" }),
});

type formData = z.infer<typeof schema>;

const AdminLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const override: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const form = useForm<formData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //Handle School Admin Login Form Submit
  const onSubmit = (values: formData) => {
    setIsLoading(true);
    axiosInstance
      .post("/login/", values)
      .then((res) => {
        toast.success("Logged in successfull");
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.access_token);
        localStorage.removeItem("email");
        router.push("/admin/auth/account-setup");
        form.reset();
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      <div className="hidden lg:flex lg:items-center lg:justify-center relative overflow-hidden">
        <Image
          src={AdminSigninImage}
          alt="Lerndise Admin sign up"
          className="object-cover w-[500px] max-h-dvh"
          priority
        />
      </div>
      <div className="w-full flex items-center md:justify-center lg:justify-start p-8">
        <Card className="w-full bg-transparent rounded-none max-w-lg bg-grey-200 shadow-none border-none">
          <CardContent className="">
            <div className="mb-4">
              <h2 className="text-4xl font-semibold">Log in</h2>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <InputControl
                  control={form.control}
                  name="email"
                  label="Email Address"
                  placeholder="name@gmail.com"
                />
                <InputControl
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Please enter your password"
                  type="password"
                />
                <div className="flex justify-center">
                  <Button
                    className="py-5 w-[200px] rounded-[30px] text-sm"
                    type="submit"
                  >
                    {isLoading ? (
                      <ScaleLoader
                        color="#fff"
                        loading={true}
                        height={20}
                        cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Proceed"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
