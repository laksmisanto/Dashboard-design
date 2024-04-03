import {
  UserOutlined,
  AlignLeftOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Input, Button, Upload, Image } from "antd";
import { useState } from "react";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddCategory = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    details: "",
    categoryImage: "",
    slug: "",
  });

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleAddCategory = async () => {
    console.log("click hoise");
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

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
