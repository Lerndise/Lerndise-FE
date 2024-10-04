import SideNav from '@/components/DashboardPage/SideNav';
import Header from '@/components/Header';
import React from 'react'

const adminLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='flex w-full items-start bg-white-a700'>
      <SideNav />
      <section className='w-full'>
        <Header />
        {children}
      </section>
    </div>
  );
}

export default adminLayout;