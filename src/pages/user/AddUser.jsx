import { UserOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";

const AddUser = () => {
  return (
    <>
      <Row className="h-screen justify-center items-center">
        <Col className="w-2/5 text-center">
          <Input
            className="mb-3"
            placeholder="User name"
            prefix={<UserOutlined />}
          />
          <Input
            className="mb-5"
            placeholder="Email"
            prefix={<UserOutlined />}
          />
          <Button type="button" className="bg-orange-700 text-white">
            Submit
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AddUser;
