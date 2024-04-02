import { Space, Table } from "antd";

import { Badge } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  let [userList, setUserList] = useState();
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(
          "http://localhost:8000/api/v1/users/user-list"
        );
        if (res.status === 200) {
          setUserList(res?.data);
        }
      } catch (error) {
        console.log("User Data API Connection Error : ", error);
      }
    })();
  }, []);

  const columns = [
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "phoneNumber",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "addressOne",
      dataIndex: "addressOne",
      key: "addressOne",
    },
    {
      title: "district",
      dataIndex: "district",
      key: "district",
    },
    {
      title: "city",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "division",
      dataIndex: "division",
      key: "division",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
      render: (_, record) =>
        record.role === "customer" ? (
          <Badge count={record.role} showZero color="#faad14" />
        ) : (
          "Not verified"
        ),
    },
    {
      title: "isVerified",
      dataIndex: "isVerified",
      key: "isVerified",
      render: (_, record) =>
        record.isVerified == true ? (
          <Badge count={record.isVerified} showZero color="#52c41a" />
        ) : (
          <Badge count={"Not verified"} showZero color="#f5222d" />
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">
        User List
      </h2>
      <Table columns={columns} dataSource={userList} />
    </>
  );
};

export default UserList;
