import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
};

export default MainLayout;
