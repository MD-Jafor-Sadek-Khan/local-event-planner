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
        },
      }

  return (
    <ConfigProvider
      theme={config}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntDesignConfig
