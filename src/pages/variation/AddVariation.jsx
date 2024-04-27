import { DeploymentUnitOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useState } from "react";
import api from "../../api";

const AddVariation = () => {
  const [inputValues, setInputValues] = useState();

  const handleInputValues = (e) => {
    setInputValues(e.target.value);
  };
  const [btnLoading, setBtnLoading] = useState(false);

  const handleAddVariation = async () => {
    if (inputValues) {
      console.log(inputValues);
      setBtnLoading(true);
      try {
        let res = await api.post(
          "/variation/create",
          { name: inputValues },
          {
            headers: {
              authorization:
                "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJiMjg1NmEwN2FmNDc0ZGMyYzc0ZjAiLCJfZW1haWwiOiJsYWtzbWlzYW50bzE5OThAZ21haWwuY29tIiwiaWF0IjoxNzE0MjIwMzQzLCJleHAiOjE3MTQzMDY3NDN9.z1rxJ65hq4YCVAjmfym0UsUsRsJCXqr-Mi2YDdWGbdg",
            },
          }
        );

        if (inputValues) {
          console.log("input value is : ", inputValues);
          setBtnLoading(false);
        }
        if (res.status === 201) {
          setBtnLoading(false);

          setInputValues("");
        }
        console.log("add user successful :", res);
      } catch (error) {
        console.log("Add Category Error : ", error);
      }
    } else {
      console.log("please fill your input fill");
    }
  };
  return (
    <>
      <div>
        <Input
          size="large"
          className="mb-5"
          placeholder="Variation name"
          name="name"
          onChange={(e) => handleInputValues(e)}
          value={inputValues}
          prefix={<DeploymentUnitOutlined />}
        />
      </div>

      <div>
        {btnLoading ? (
          <Button size="large" type="primary" loading>
            add category
          </Button>
        ) : (
          <Button size="large" type="primary" onClick={handleAddVariation}>
            add category
          </Button>
        )}
      </div>
    </>
  );
};

export default AddVariation;
