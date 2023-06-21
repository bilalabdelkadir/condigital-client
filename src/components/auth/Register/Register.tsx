import React, { useEffect, useState } from "react";
import { registerUser } from "../../../utils/api";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values: any) => {
    try {
      const { firstName, lastName, email, password } = values;

      const response = await registerUser(firstName, lastName, email, password);

      if (response.status === 201) {
        alert("User created successfully");
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      form.resetFields();
    }
  };

  return (
    <Form
      form={form}
      name="horizontal_register"
      layout="vertical"
      onFinish={onFinish}
      className={Styles["form-container"]}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Please enter your Firstname" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="John"
        />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please enter your Last name" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Doe"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please enter your Email" },
          { type: "email", message: "Please enter a valid Email" },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter a password" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: "Please confirm your password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Passwords do not match");
            },
          }),
        ]}
        dependencies={["password"]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Confirm password"
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
            Signup
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Register;
