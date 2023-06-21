import React, { useEffect, useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Styles from "./Login.module.css";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="vertical"
      onFinish={onFinish}
      className={Styles["form-container"]}
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="dashed"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
            className={Styles["btn-class"]}
          >
            Login
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Login;
