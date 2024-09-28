import React, { Suspense } from "react";
import EmailVerification from "@/components/EmailVerification";

const VerifyEmail = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <EmailVerification />
      </Suspense>
  );
};

export default VerifyEmail;