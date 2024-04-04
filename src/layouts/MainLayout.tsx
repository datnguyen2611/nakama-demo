import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const MainLayout = () => {
  return (
    <Layout className="w-[700px] m-auto bg-transparent">
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
