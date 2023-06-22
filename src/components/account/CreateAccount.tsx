import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Row, Col } from "antd";

const { Option } = Select;

const CreateAccount: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {};

  return (
    <>
      <Button type="primary" onClick={handleOpen}>
        New Bank Account
      </Button>
      <Modal
        title="Bank Account Form"
        centered
        open={open}
        onCancel={handleClose}
        footer={null}
        width={1000}
      >
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Form.Item
                label="Bank Name"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Account Number"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Account type"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Select defaultValue="checking">
                  <Option value="checking">checking</Option>
                  <Option value="saving">saving</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Starting Balance"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Date"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input type="date" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Minimum Balance Warning"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Country"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Currency"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <Select defaultValue="ETB">
                  <Option value="ETB">ETB</Option>
                  <Option value="USD">USD</Option>
                  <Option value="AED">AED</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" onClick={handleRegister}>
                  Register Bank Account
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default CreateAccount;
