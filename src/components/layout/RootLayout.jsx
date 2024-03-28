import { Outlet } from "react-router-dom";
import MenuBar from "../menu/MenuBar";
import { Col, Row } from "antd";

const RootLayout = () => {
  return (
    <>
      <div className="xl:container container">
        <Row>
          <Col className="xl:w-1/5">
            <MenuBar />
          </Col>
          <Col className="xl:w-4/5">
            <Outlet />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RootLayout;
