import {
  UserOutlined,
  AlignLeftOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Input, Button, Upload, Image } from "antd";
import axios from "axios";
import { useState } from "react";

// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

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

  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState("");
  const [categoryImage, setCategoryImage] = useState([]);

  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const handleAddCategory = async () => {
    console.log("click hoise");
    // const formData = new formData();
    // formData.append("categoryImage", categoryImage);
    let data = { ...inputValues, categoryImage: categoryImage };
    let res = await axios.post(
      "http://localhost:8000/api/v1/category/create?createCategory",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    // console.log("formData : ", formData);
    console.log("data : ", res);
  };

  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreviewImage(file.url || file.preview);
  //   setPreviewOpen(true);
  // };

  // const uploadButton = (
  //   <button
  //     style={{
  //       border: 0,
  //       background: "none",
  //     }}
  //     type="button"
  //   >
  //     <PlusOutlined />
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </button>
  // );

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
      {/* <div>
        <Upload
          // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          name="categoryImage"
          onChange={handleChange}
          value={inputValues.categoryImage}
        >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: "none",
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </div> */}
      <div>
        <Input
          size="large"
          className="mb-5"
          type="file"
          name="categoryImage"
          onChange={handleCategoryImage}
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
        <Button size="large" type="primary" onClick={handleAddCategory}>
          Primary
        </Button>
      </div>
    </>
  );
};

export default AddCategory;
