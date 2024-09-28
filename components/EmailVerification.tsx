/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';

const EmailVerification: React.FC = () => {
  const [verificationStatus, setVerificationStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const verifyEmail = async () => {
      const code = searchParams.get('code');

      if (!code) {
        setVerificationStatus('error');
        return;
      }

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/verify-email`, {
          params: { code }
        });

        if (response.data.success) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        console.error('Email verification failed:', error);
        setVerificationStatus('error');
      }
    };

    verifyEmail();
  }, [searchParams]);

  if (verificationStatus === 'verifying') {
    return <div>Verifying your email...</div>;
  }

  if (verificationStatus === 'success') {
    return (
      <div>
        <h1>Email Verified Successfully!</h1>
        <p>Congratulations! Your email has been verified.</p>
        <button onClick={() => router.push('/dashboard')}>Go to Dashboard</button>
      </div>
    );
  }

  if (verificationStatus === 'error') {
    return (
      <div>
        <h1>Email Verification Failed</h1>
        <p>Sorry, we couldn't verify your email. Please try again or contact support.</p>
        <button onClick={() => router.push('/support')}>Contact Support</button>
      </div>
    );
  }

  return null;
};

export default EmailVerification;