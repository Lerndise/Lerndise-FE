"use client";

import React from "react";
import Image from "next/image";
import Home from "../../public/Home.svg"
import Admin from "../../public/Admin.svg";
import Finance from "../../public/Schedule.svg";
import Academics from "../../public/Academics.svg";
import Schedule from "../../public/Calendar.svg";
import Leave from "../../public/Schedule.svg";
import Library from "../../public/Library.svg";
import Announcements from "../../public/Announcement.svg";
import Health from "../../public/Health.svg";
import Notifications from "../../public/NotificationAlert.svg";
import Settings from "../../public/Academics.svg";
import Logout from "../../public/Logout.svg";

import { MenuItem, Menu, Sidebar} from "react-pro-sidebar";
import Brand from "./Brand2";
import Brand2 from "./Brand2";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  className?: string;
}

const SideNav = ({ ...props }: Props) => {
  const pathname = usePathname()

  const activePath = pathname.split("/")[3]
  
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="284px"
      collapsed={collapsed}
      className=" flex flex-col self-center h-screen pt-[34px] px-[60px]  sm:gap-[34px] sm:pt-4  bg-gray-100 "
    >
      <Brand2 />
      <Menu
        menuItemStyles={{
          button: {
            padding: 0,
            gap: "8px",
            color: "#454545",
            fontWeight: 600,
            fontSize: "14px",
            borderRadius: "4px",
            paddingTop: "5px",
            paddingBottom: "5px",
            [`&:hover, &.ps-active`]: {
              color: "#440f7c",
              fontWeight: "700",
            },
          },
        }}
        className="flex w-full flex-col mt-[68px] overflow-auto"
      >
        <div className="flex flex-col ab gap-8 ">
          <MenuItem
            icon={<Image src={Home} alt="Home" className="h-[20px] w-[20px]" />}
          >
            <Link className={`link ${activePath === undefined ? 'active' : ''}`} href='/admin/dashboard'>Home</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image src={Admin} alt="Admin" className="h-[20px] w-[20px]" />
            }
          >
            <Link className={`link ${activePath === 'admin' ? 'active' : ''}`} href='/admin/dashboard/admin'>Admin</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image
                src={Finance}
                alt="Finance"
                className="h-[20px] w-[20px]"
              />
            }
          >
            <Link className={`link ${activePath === 'finance' ? 'active' : ''}`} href='/admin/dashboard/finance'>Finance Mgmt</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image
                src={Academics}
                alt="Academics"
                className="h-[20px] w-[20px]"
              />
            }
          >
            <Link className={`link ${activePath === 'academics' ? 'active' : ''}`} href='/admin/dashboard/academics'>Academics</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image
                src={Schedule}
                alt="Schedule"
                className="h-[20px] w-[20px]"
              />
            }
          >
            <Link className={`link ${activePath === 'schedule' ? 'active' : ''}`} href='/admin/dashboard/schedule'>School Schedule</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image src={Leave} alt="Leave" className="h-[20px] w-[20px]" />
            }
          >
            <Link className={`link ${activePath === 'leave' ? 'active' : ''}`} href='/admin/dashboard/leave'>Leave Schedule</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image
                src={Library}
                alt="Library"
                className="h-[16px] w-[16px]"
              />
            }
          >
            <Link className={`link ${activePath === 'library' ? 'active' : ''}`} href='/admin/dashboard/library'>Digital Library</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image
                src={Announcements}
                alt="Announcements"
                className="h-[20px] w-[20px]"
              />
            }
          >
            <Link className={`link ${activePath === 'anouncement' ? 'active' : ''}`} href='/admin/dashboard/anouncement'>Announcements</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image src={Health} alt="Health" className="h-[20px] w-[20px]" />
            }
          >
            <Link className={`link ${activePath === 'health' ? 'active' : ''}`} href='/admin/dashboard/health'>Health</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image
                src={Notifications}
                alt="Notifications"
                className="h-[20px] w-[20px]"
              />
            }
          >
            <Link className={`link ${activePath === 'notifications' ? 'active' : ''}`} href='/admin/dashboard/notifications'>Notifications</Link>
          </MenuItem>
          <MenuItem
            icon={
              <Image
                src={Settings}
                alt="Settings"
                className="h-[20px] w-[20px]"
              />
            }
          >
            <Link className={`link ${activePath === 'settings' ? 'active' : ''}`} href='/admin/dashboard/settings'>Settings</Link>
          </MenuItem>
        </div>
        <div className="flex absolute bottom-0 mb-[24px] ">
          <MenuItem
            icon={
              <Image
                src={Logout}
                alt="Logout"
                className="h-[20px] w-[20px] "
              />
            }
          >
            Logout
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
}
export default SideNav;
