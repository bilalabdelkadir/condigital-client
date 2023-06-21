import { useEffect, useState } from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginUserRequest } from "../../../utils/api";
import { loginSuccess } from "../../../reducers/authSlice";

const Login = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = async (values: any) => {
    try {
      const { email, password } = values;
      const response = await loginUserRequest(email, password);
      if (response.status === 200) {
        const token = response.data.token;
        dispatch(loginSuccess(token));
        // Redirect or perform any other action upon successful login
      }
    } catch (error) {
      alert(error);
    }
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
