import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Row, Select, Typography } from "antd";
import { useState } from "react";
import api from "../../api";

const AddUser = () => {
  const [btnLoading, setBtnLoading] = useState(false);

  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    postCode: "",
    division: "",
    district: "",
    password: "",
    role: "",
  });
  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleChange = (value) => {
    setInputValues((prevValue) => ({ ...prevValue, role: value }));
  };

  const handleAddUsers = async () => {
    setBtnLoading(true);
    try {
      const res = await api.post("users/register", inputValues);
      if (res.status === 200) {
        setBtnLoading(false);
        setInputValues(() => ({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          addressOne: "",
          addressTwo: "",
          city: "",
          postCode: "",
          division: "",
          district: "",
          password: "",
          role: "",
        }));
      }
      console.log("Add User Data : ", res);
    } catch (error) {
      console.log("Add User Error : ", error);
    }
  };

  return (
    <>
      <Row gutter={8}>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>First name</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="first name"
              name="firstName"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.firstName}
              prefix={<UserOutlined />}
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Last name</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="last name"
              name="lastName"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.lastName}
              prefix={<UserOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Email address</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="email address"
              name="email"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.email}
              prefix={<MailOutlined />}
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Phone number</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="phone number"
              name="phoneNumber"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.phoneNumber}
              prefix={<PhoneOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Address one</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="address one"
              name="addressOne"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.addressOne}
              prefix={<EnvironmentOutlined />}
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Address two</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="address two"
              name="addressTwo"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.addressTwo}
              prefix={<EnvironmentOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          {" "}
          <div>
            <Typography.Title level={5}>City</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="city"
              name="city"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.city}
              prefix={<EnvironmentOutlined />}
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Post code</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="post code"
              name="postCode"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.postCode}
              prefix={<EnvironmentOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Division</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="division"
              name="division"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.division}
              prefix={<EnvironmentOutlined />}
            />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>District</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="district"
              name="district"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.district}
              prefix={<EnvironmentOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <Typography.Title level={5}>Role</Typography.Title>
          <Select
            defaultValue="select role"
            style={{
              width: "100%",
            }}
            size="large"
            name="role"
            onChange={handleChange}
            options={[
              {
                value: "admin",
                label: "admin",
              },
              {
                value: "editor",
                label: "editor",
              },
              {
                value: "customer",
                label: "customer",
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <div>
            <Typography.Title level={5}>Password</Typography.Title>
            <Input.Password
              size="large"
              className="mb-2"
              placeholder="password"
              name="password"
              onChange={(e) => handleInputValues(e)}
              value={inputValues.password}
              prefix={<LockOutlined />}
            />
          </div>
        </Col>
      </Row>
      <div className="mt-8">
        {btnLoading ? (
          <Button size="large" type="primary" loading>
            Add User
          </Button>
        ) : (
          <Button size="large" type="primary" onClick={handleAddUsers}>
            Add User
          </Button>
        )}
      </div>
    </>
  );
};

export default AddUser;
