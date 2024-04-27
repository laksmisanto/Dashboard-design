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
    getItem("add user", "/add-user", <UserAddOutlined />),
    getItem("user list", "/user-list", <UnorderedListOutlined />),
  ]),
  {
    type: "divider",
  },
  getItem("category", "category", <AppstoreOutlined />, [
    getItem("add category", "/add-category", <AppstoreAddOutlined />),
    getItem("category list", "/category-list", <UnorderedListOutlined />),
  ]),
  {
    type: "divider",
  },
  getItem("product", "product", <ProductOutlined />, [
    getItem("add product", "/add-product", <AppstoreAddOutlined />),
    getItem("product list", "/product-list", <UnorderedListOutlined />),
  ]),
  {
    type: "divider",
  },
  getItem("variation", "variation", <ProductOutlined />, [
    getItem("add variation", "/add-variation", <AppstoreAddOutlined />),
    getItem("variation list", "/variation-list", <UnorderedListOutlined />),
  ]),
];

const MenuBar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={
          {
            // width: 254,
          }
        }
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default MenuBar;
