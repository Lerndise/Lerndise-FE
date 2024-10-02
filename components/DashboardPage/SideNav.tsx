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

interface Props {
  className?: string;
}

const SideNav = ({ ...props }: Props) => {
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
            Home
          </MenuItem>
          <MenuItem
            icon={
              <Image src={Admin} alt="Admin" className="h-[20px] w-[20px]" />
            }
          >
            Admin
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
            Finance Mgmt
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
            Academics
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
            School Schedule
          </MenuItem>
          <MenuItem
            icon={
              <Image src={Leave} alt="Leave" className="h-[20px] w-[20px]" />
            }
          >
            Leave Schedule
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
            Digital Library
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
            Announcements
          </MenuItem>
          <MenuItem
            icon={
              <Image src={Health} alt="Health" className="h-[20px] w-[20px]" />
            }
          >
            Health
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
            Notifications
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
            Settings
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
