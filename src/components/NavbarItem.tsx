import { Link, useLocation } from "react-router-dom";
import { Icon } from "iconsax-react";
import { cn } from "../lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: Icon;
}

const NavbarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  const location = useLocation();
  const isActive =
    href === location.pathname || location.pathname.startsWith(`${href}/`);

  return (
    <Link
      to={href}
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl  dark:border-2",
        isActive
          ? "text-white dark:text-primary bg-primary dark:bg-transparent dark:border-primary"
          : "text-primary bg-primary/10 dark:bg-secondary dark:text-darkGray dark:border-transparent",
      )}
    >
      <Icon
        className={cn(
          isActive
            ? "text-white dark:text-primary"
            : "text-primary dark:text-darkGray",
        )}
        size={40}
        variant="Bold"
      />
    </Link>
  );
};

export default NavbarItem;
