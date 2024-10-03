import SideNav from '@/components/DashboardPage/SideNav';
import React from 'react'

const adminLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex w-full items-start bg-white-a700'>
      <SideNav />
      {children}
    </div>
  );
}

export default adminLayout;