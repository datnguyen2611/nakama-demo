import { Home3, Notification } from "iconsax-react";
import { Pages } from "../types";
import NavbarItem from "./NavbarItem";

const NavBar = () => {
  const routes = [
    {
      path: Pages.home,
      title: "Trang chủ",
      icon: Home3,
    },
    {
      path: Pages.notification,
      title: "Thông báo",
      icon: Notification,
    },
  ];

  return (
    <div className="flex-1 grid grid-cols-2 gap-x-6 gap-y-5 pb-2">
      {routes.map((route) => (
        <NavbarItem
          key={route.path}
          href={route.path}
          label={route.title}
          icon={route.icon}
        />
      ))}
    </div>
  );
};
export default NavBar;
