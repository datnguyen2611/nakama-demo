import { ConfigProvider } from "antd";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import locale from "antd/locale/vi_VN";
function App() {
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: "#00B074",
          fontFamily: '"Inter", sans-serif',
          borderRadius: 8,
        },
        components: {
          Button: {
            controlHeight: 36,
            borderRadiusLG: 8,
            fontWeight: 500,
          },
          Modal: {
            titleFontSize: 18,
            fontWeightStrong: 600,
          },
          Tag: {
            borderRadiusSM: 9999,
            lineHeightSM: 2.17,
            colorSuccessBorder: "#A9EFC5",
            colorSuccessBg: "#ECFDF3",
            colorSuccess: "#067647",
            colorWarningBorder: "#FEDF89",
            colorWarningBg: "#FFFAEB",
            colorWarning: "#B54708",
          },
          Table: {
            selectionColumnWidth: 60,
            headerColor: "#475467",
            fontWeightStrong: 500,
          },
          Checkbox: {
            controlInteractiveSize: 20,
          },
          Steps: {
            iconSize: 48,
            titleLineHeight: 24,
          },
          Collapse: {
            contentPadding: 0,
          },
        },
      }}
    >
      <Outlet />
    </ConfigProvider>
  );
}

export default App;
