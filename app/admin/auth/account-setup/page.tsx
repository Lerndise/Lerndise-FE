"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AdminSigninImage from "@/public/AdminSignin.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RadioControl from "@/components/Form/RadioControl";
import DatePickerControl from "@/components/Form/DatePickerControl";

const schema = z.object({
  name_of_school: z.string().min(2).max(20),
  address: z.string().min(2).max(20),
  phone: z
    .string()
    .min(11, { message: "Your phone number must contain up to 11 digits" })
    .max(11),
  category: z.enum(["Government", "Private", ""], {
    required_error: "You need to select a notification type.",
  }),
  state: z.string().min(2).max(20),
  ube_number: z.string().min(2).max(20),
  seb_number: z.string().min(2).max(20),
  year_founded: z.string().min(2).max(20),
  // year_founded: z.date({
  //   required_error: "Year founded is required.",
  // }),
});

type formData = z.infer<typeof schema>;

const AdminSchoolRegister = () => {
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
      name_of_school: "",
      address: "",
      phone: "",
      category: "",
      state: "",
      ube_number: "",
      seb_number: "",
      year_founded: "",
    },
  });

  //Handle School Admin Login Form Submit
  const onSubmit = (values: formData) => {
    setIsLoading(true);
    axiosInstance
      .post("/register-school/complete/", values)
      .then((res) => {
        toast.success("Account setup successfully");
        router.push("/admin/dashboard");
        form.reset();
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setIsLoading(false);
      });
  };

  const options = [
    { value: "Government", label: "Government" },
    { value: "Private", label: "Private" },
  ];

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
          <CardHeader className="grid text-center">
            <CardTitle className="font-bold text-base lg:text-3xl font-heading">
              Account Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <Carousel className="w-auto">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex p-6">
                              <div className="flex flex-col gap-4 w-full">
                                <InputControl
                                  control={form.control}
                                  name="name_of_school"
                                  label="School Name"
                                  placeholder="Enter your school name"
                                />
                                <InputControl
                                  control={form.control}
                                  name="address"
                                  label="School Address"
                                  placeholder="Enter your school address"
                                />
                                <InputControl
                                  control={form.control}
                                  name="phone"
                                  label="School Phone number"
                                  placeholder="09078976534"
                                />
                                <RadioControl
                                  control={form.control}
                                  name="category"
                                  label="Select your preference:"
                                  options={options}
                                  defaultValue="option1"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex p-6">
                              <div className="flex flex-col gap-4 w-full">
                                <InputControl
                                  control={form.control}
                                  name="state"
                                  label="State"
                                  placeholder="Enter your school address"
                                />
                                <InputControl
                                  control={form.control}
                                  name="ube_number"
                                  label="UBE Number"
                                  placeholder="Enter your school UBE number"
                                />
                                <InputControl
                                  control={form.control}
                                  name="seb_number"
                                  label="SEB Number"
                                  placeholder="Enter your school SEB number"
                                />
                                <InputControl
                                  control={form.control}
                                  name="year_founded"
                                  label="Year Founded"
                                  placeholder="2000-04-09"
                                />
                                {/* <DatePickerControl
                                  control={form.control}
                                  name="year_founded"
                                  label="Year Founded"
                                /> */}
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
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious variant="default" />
                    <CarouselNext variant="default" />
                  </Carousel>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSchoolRegister;
