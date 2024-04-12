import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import {
  AutoComplete,
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  Select,
  Upload,
} from "antd"
import { PlusOutlined } from "@ant-design/icons"

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

const SignUpForm = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 140 }}>
        <Option value="86">China +86</Option>
        <Option value="91">India +91</Option>
        <Option value="1">United States +1</Option>
        <Option value="62">Indonesia +62</Option>
        <Option value="880">Bangladesh +880</Option>
        <Option value="55">Brazil +55</Option>
        <Option value="234">Nigeria +234</Option>
        <Option value="92">Pakistan +92</Option>
        <Option value="81">Japan +81</Option>
        <Option value="90">Turkey +90</Option>
        <Option value="49">Germany +49</Option>
        <Option value="27">South Africa +27</Option>
        <Option value="39">Italy +39</Option>
        <Option value="44">United Kingdom +44</Option>
        <Option value="33">France +33</Option>
        <Option value="82">South Korea +82</Option>
        <Option value="7">Russia +7</Option>
        <Option value="966">Saudi Arabia +966</Option>
        <Option value="61">Australia +61</Option>
      </Select>
    </Form.Item>
  )

  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      )
    }
  }

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }))

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 20px",
        flexDirection: "column",
      }}
    >
      <h1>SignUp</h1>
      <div>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  )
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="website" label="Website">
            <AutoComplete
              options={websiteOptions}
              onChange={onWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          </Form.Item>
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button style={{ border: 0, background: "none" }} type="button">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item name="intro" label="Intro">
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Outlet />
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <Link to="agreement">agreement</Link>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SignUpForm
