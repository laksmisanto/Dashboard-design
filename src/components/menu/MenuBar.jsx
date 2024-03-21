import {
  UserOutlined,
  ProductOutlined,
  AppstoreOutlined,
  UserAddOutlined,
  UnorderedListOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("user", "user", <UserOutlined />, [
    getItem("add user", "1", <UserAddOutlined />),
    getItem("user list", "2", <UnorderedListOutlined />),
  ]),
  {
    type: "divider",
  },
  getItem("category", "category", <AppstoreOutlined />, [
    getItem("add category", "3", <AppstoreAddOutlined />),
    getItem("category list", "4", <UnorderedListOutlined />),
  ]),
  getItem("product", "product", <ProductOutlined />, [
    getItem("add product", "5", <AppstoreAddOutlined />),
    getItem("product list", "6", <UnorderedListOutlined />),
  ]),
];

const MenuBar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    // navigate(e.key);
    console.log(e.keyPath[1]);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default MenuBar;
