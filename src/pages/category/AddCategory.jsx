import {
  UserOutlined,
  AlignLeftOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import { useState } from "react";
import api from "../../api";

const AddCategory = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    details: "",
    slug: "",
  });

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const [categoryImage, setCategoryImage] = useState([]);

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };
  const [btnLoading, setBtnLoading] = useState(false);
  const handleAddCategory = async () => {
    setBtnLoading(true);
    try {
      let data = { ...inputValues, categoryImage: categoryImage };
      let res = await api.post("category/create?createCategory", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201) {
        setBtnLoading(false);
        setCategoryImage(() => ({
          categoryImage: "",
        }));
        setInputValues(() => ({
          name: "",
          details: "",
          slug: "",
        }));
      }
      console.log("add user successful :", res);
    } catch (error) {
      console.log("Add Category Error : ", error);
    }
  };

  return (
    <>
      <div>
        <Input
          size="large"
          className="mb-5"
          placeholder="Category name"
          name="name"
          onChange={(e) => handleInputValues(e)}
          value={inputValues.name}
          prefix={<UserOutlined />}
        />
      </div>
      <div>
        <Input
          size="large"
          className="mb-5"
          placeholder="Category details"
          name="details"
          onChange={(e) => handleInputValues(e)}
          value={inputValues.details}
          prefix={<AlignLeftOutlined />}
        />
      </div>
      <div>
        <Input
          size="large"
          className="mb-5"
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
          value={inputValues.categoryImage}
        />
      </div>
      <div>
        <Input
          size="large"
          className="mb-5"
          placeholder="Category slug"
          prefix={<MinusOutlined />}
          name="slug"
          onChange={(e) => handleInputValues(e)}
          value={inputValues.slug}
        />
      </div>
      <div>
        {btnLoading ? (
          <Button size="large" type="primary" loading>
            add category
          </Button>
        ) : (
          <Button size="large" type="primary" onClick={handleAddCategory}>
            add category
          </Button>
        )}
      </div>
    </>
  );
};

export default AddCategory;
