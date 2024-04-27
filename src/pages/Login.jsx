import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col, Input, Typography, Button } from "antd";
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [btnLoading, setBtnLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setInputValues((e) => ({ ...e, [name]: value }));
  };

  const handleUserLogin = async () => {
    setBtnLoading(true);
    try {
      const res = await api.post("users/login", inputValues);
      const { accessToken, refreshToken, role } = res.data.data;
      localStorage.setItem(
        "_userInfo",
        JSON.stringify({ accessToken, refreshToken, role })
      );
      navigate("/");
      console.log("Login successful : ", res);

      if (res.status === 200 || res.status === 201) {
        setBtnLoading(false);
        setInputValues(() => ({
          email: "",
          password: "",
        }));
      }
    } catch (error) {
      console.log("user login error : ", error);
    }
  };
  return (
    <>
      <div>
        <Row className="h-screen justify-center items-center">
          <Col span={8}>
            <div className=" shadow-md p-8 rounded-lg">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-5">
                Login
              </h2>
              <div className="mb-2">
                <Typography.Title level={5}>email</Typography.Title>
                <Input
                  size="large"
                  placeholder="email"
                  name="email"
                  onChange={handleLoginData}
                  value={inputValues.email}
                  prefix={<UserOutlined />}
                />
              </div>
              <div className="mb-5">
                <Typography.Title level={5}>Password</Typography.Title>
                <Input.Password
                  size="large"
                  placeholder="password"
                  name="password"
                  onChange={handleLoginData}
                  value={inputValues.password}
                  prefix={<LockOutlined />}
                />
              </div>
              <div className="text-center">
                {btnLoading ? (
                  <Button size="large" type="primary" loading>
                    Login
                  </Button>
                ) : (
                  <Button size="large" type="primary" onClick={handleUserLogin}>
                    Login
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
