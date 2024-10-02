/* eslint-disable react/no-unescaped-entities */
"use client";
import { CSSProperties, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import AdminSignupImage from "@/public/AdminSignup.png";
import { Card, CardContent } from "./ui/card";
import { Button } from "@/components/ui/button";
import ScaleLoader from "react-spinners/ScaleLoader";

const EmailVerification: React.FC = () => {
  const [verificationStatus, setVerificationStatus] = useState<
    "verifying" | "success" | "error"
  >("verifying");
  const searchParams = useSearchParams();
  const router = useRouter();

  const override: CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    const verifyEmail = async () => {
      const code = searchParams.get("code");

      if (!code) {
        setVerificationStatus("error");
        return;
      }

      try {
        const response = await axios.get(
          `https://backend-learndise.azurewebsites.net/verify-email`,
          {
            params: { code },
          }
        );

        if (response.data.success) {
          setVerificationStatus("success");
        } else {
          setVerificationStatus("error");
        }
      } catch (err) {
        console.error("Email verification failed:", err);
        setVerificationStatus("error");
      }
    };

    verifyEmail();
  }, [searchParams]);

  if (verificationStatus === "verifying") {
    return (
      <div>
        <ScaleLoader
          color="#440F7C"
          loading={true}
          height={100}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (verificationStatus === "success") {
    return (
      <div className="w-full lg:grid lg:grid-cols-2">
        <div className="hidden lg:flex lg:items-center lg:justify-center relative overflow-hidden">
          <Image
            src={AdminSignupImage}
            alt="Lerndise Admin sign up"
            className="object-cover w-[500px]"
            priority
          />
        </div>
        <div className="w-full flex items-center md:justify-center lg:justify-start p-8">
          <Card className="w-full bg-transparent rounded-none max-w-lg bg-grey-200 shadow-none border-none">
            <CardContent className="">
              <div className="mb-4">
                <h2 className="text-4xl font-semibold">
                  Email Verified Successfully!
                </h2>
              </div>
              <div>
                <p>Congratulations! Your email has been verified.</p>
                <Button onClick={() => router.push("/admin/dashboard")}>
                  Go to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (verificationStatus === "error") {
    return (
      <div className="w-full lg:grid lg:grid-cols-2">
        <div className="hidden lg:flex lg:items-center lg:justify-center relative overflow-hidden">
          <Image
            src={AdminSignupImage}
            alt="Lerndise Admin sign up"
            className="object-cover w-[500px]"
            priority
          />
        </div>
        <div className="w-full flex items-center md:justify-center lg:justify-start p-8">
          <Card className="w-full bg-transparent rounded-none max-w-lg bg-grey-200 shadow-none border-none">
            <CardContent className="">
              <div className="mb-4">
                <h2 className="text-4xl font-semibold">
                  Email Verification Failed!
                </h2>
              </div>
              <div>
                <div>
                  <p>
                    Sorry, we couldn't verify your email. Please try again or
                    contact support.
                  </p>
                </div>
                <Button onClick={() => router.push("/support")}>
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default EmailVerification;
