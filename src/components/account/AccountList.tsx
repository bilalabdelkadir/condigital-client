import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { MoreOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
interface DataType {
  id: string;
  bankName: string;
  accountNumber: string;
  accountType: string;
  startingBalance: string;
  minimumBalance: string;
  country: string;
  currency: string;
  addedBy: {
    firstName: string;
  };
}

const columns: ColumnsType<DataType> = [
  { title: "Bank Name", dataIndex: "bankName", key: "bankName" },
  { title: "Account Number", dataIndex: "accountNumber", key: "accountNumber" },
  { title: "Account Type", dataIndex: "accountType", key: "accountType" },
  {
    title: "Starting Balance",
    dataIndex: "startingBalance",
    key: "startingBalance",
  },
  {
    title: "Minimum Balance",
    dataIndex: "minimumBalance",
    key: "minimumBalance",
  },
  { title: "Country", dataIndex: "country", key: "country" },
  { title: "Currency", dataIndex: "currency", key: "currency" },
  { title: "Added By", dataIndex: "addedBy.firstName", key: "addedBy" },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => (
      <Space size="middle">
        <MoreOutlined />
      </Space>
    ),
  },
];

const AccountList: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const token = useSelector((state: any) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/account");

        setData(response.data.accounts);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    };

    fetchData();
  }, [token]);

  return <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />;
};

export default AccountList;
