import { Space, Table } from "antd";
import { useEffect, useState } from "react";
import api from "../../api";

const CategoryList = () => {
  const [categoryDataList, setCategoryDataList] = useState();
  useEffect(() => {
    (async () => {
      try {
        let res = await api.get("category/category-list");
        if (res.status == 200) {
          setCategoryDataList(res?.data);
        }
      } catch (error) {
        console.log("categoryImage List Error : ", error);
      }
    })();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "details",
      dataIndex: "details",
      key: "details",
    },
    {
      title: "slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "categoryImage",
      key: "categoryImage",
      dataIndex: "categoryImage",
      width: "20px",
      render: (categoryImage) => (
        <img alt={categoryImage} src={categoryImage} />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Invite</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={categoryDataList} />
    </>
  );
};

export default CategoryList;
