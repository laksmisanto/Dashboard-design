import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Select, Typography } from "antd";
import { useState } from "react";

const AddUser = () => {
  const [addUsers, setAddUsers] = useState({
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
    role: "",
  });
  const handleAddUsers = (e) => {
    const { name, value } = e.target;
    setAddUsers((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.firstName}
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.lastName}
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.email}
              prefix={<UserOutlined />}
            />
          </div>
        </Col>
        <Col span={12}>
          {" "}
          <div>
            <Typography.Title level={5}>Phone number</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="phone number"
              name="phoneNumber"
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.phoneNumber}
              prefix={<UserOutlined />}
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.addressOne}
              prefix={<UserOutlined />}
            />
          </div>
        </Col>
        <Col span={12}>
          {" "}
          <div>
            <Typography.Title level={5}>Address two</Typography.Title>
            <Input
              size="large"
              className="mb-2"
              placeholder="address two"
              name="addressTwo"
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.addressTwo}
              prefix={<UserOutlined />}
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.city}
              prefix={<UserOutlined />}
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.postCode}
              prefix={<UserOutlined />}
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.division}
              prefix={<UserOutlined />}
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
              onChange={(e) => handleAddUsers(e)}
              value={addUsers.district}
              prefix={<UserOutlined />}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Typography.Title level={5}>Role</Typography.Title>
          <Select
            defaultValue="select role"
            style={{
              width: "100%",
            }}
            size="large"
            onChange={handleChange}
            options={[
              {
                value: "Admin",
                label: "Admin",
              },
              {
                value: "Editor",
                label: "Editor",
              },
              {
                value: "Customer",
                label: "Customer",
              },
            ]}
          />
        </Col>
      </Row>
      <div className="mt-8">
        <Button size="large" type="primary">
          Primary
        </Button>
      </div>
    </>
  );
};

export default AddUser;
