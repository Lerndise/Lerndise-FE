"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import VerificationImage from "@/public/VerificationImage.png";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axiosInstance from "@/services/api-client";

const Verification = () => {
  const [countdown, setCountdown] = useState(0);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = async () => {
    const email = localStorage.getItem("email");
    if (!email) {
      toast.error("Email not found. Please try signing up again.");
      return;
    }

    setIsResending(true);
    try {
      const response = await axiosInstance.post("/resend-verification/", {
        email,
      });
      toast.success(
        response.data.message || "Verification email resent successfully!"
      );
      setCountdown(30);
    } catch (error) {
      toast.error("Failed to resend verification email. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="hidden lg:flex lg:items-center lg:justify-center relative overflow-hidden">
        <Image
          src={VerificationImage}
          alt="Lerndise Admin Email verification"
          className="object-cover w-[500px] max-h-dvh"
          priority
        />
      </div>
      <div className="flex flex-col h-full gap-6 justify-center lg:items-start lg:max-w-md mx-10">
        <section className="">
          <h1 className="text-5xl font-semibold">Email Verification</h1>
          <p className="text-lg">
            Please check your email for verification and completion of the
            enrollment.
          </p>
        </section>
        <section className="flex items-center gap-5">
          <Link href="/admin/auth/login">
            <Button variant="outline" className="bg-lerndise-purple text-white">
              Continue
            </Button>
          </Link>
          {countdown === 0 ? (
            <Button
              variant="link"
              className="p-0"
              onClick={handleResend}
              disabled={isResending}
            >
              {isResending ? "Resending..." : "Resend"}
            </Button>
          ) : (
            <span className="text-sm text-gray-500">
              Resend in {countdown}s
            </span>
          )}
        </section>
      </div>
    </div>
  );
};

export default Verification;
