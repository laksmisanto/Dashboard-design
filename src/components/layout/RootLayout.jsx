import { Navigate, Outlet } from "react-router-dom";
import MenuBar from "../menu/MenuBar";
import { Col, Row } from "antd";

const RootLayout = () => {
  const auth = JSON.parse(localStorage.getItem("_userInfo"));
  console.log("Rootlayout page auth : ", auth);

  return auth && auth.role === "admin" ? (
    <>
      <Row>
        <Col className="md:w-1/5">
          <MenuBar />
        </Col>
        <Col className="md:w-4/5 p-3 bg-gray-100 h-screen">
          <Outlet />
        </Col>
      </Row>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default RootLayout;
