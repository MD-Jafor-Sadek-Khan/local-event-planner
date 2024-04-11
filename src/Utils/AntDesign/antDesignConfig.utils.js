import { ConfigProvider } from "antd"

const AntDesignConfig = ({ children }) => {
  const config = {
    components: {
      Pagination: {
        colorText: "#a6adb4",
        itemInputBg: "grey",
        itemSize: 48,
        colorPrimary: "black",
        colorPrimaryHover: "black",
        borderRadius: 30,
        colorBgContainer: "#5c5c8c",
      },
      Card: {
        headerFontSize: 20,
        lineType: "none",
        boxShadowTertiary: "inset 0 0 10px 2px rgba(0, 0, 0, 0.2)",
      },
    },
  }

  return <ConfigProvider theme={config}>{children}</ConfigProvider>
}

export default AntDesignConfig
