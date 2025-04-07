import { ConfigProvider } from "antd";
const ThemeConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "var(--font-primary)",
          colorPrimary: "#e25319",
          colorInfo: "#e25319",
          colorSuccess: "#3fc28a",
          colorWarning: "#efbe12",
          colorError: "#f45b69",
          colorBgBase: "#131313",
          colorTextBase: "#ffffff",
          fontSize: "var(--text-xl)",
        },
        components: {
          Layout: {
            bodyBg: "var(--clr-black)",
            headerBg: "var(--clr-black)",
            siderBg: "rgba(var(--clr-gray-rgb),0.05)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
