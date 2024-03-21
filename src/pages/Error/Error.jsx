import { useNavigate } from "react-router-dom";
import "./error.css";

const Error = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="error__page">
        <div className="error__content">
          <h2>Oops!</h2>
          <h1>
            4<span>0</span>4
          </h1>
          <h4>Page Not Found</h4>
          <button onClick={goHome}>Go Home</button>
        </div>
      </div>
    </>
  );
};

export default Error;
