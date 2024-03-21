import { Outlet } from "react-router-dom";
import MenuBar from "../menu/MenuBar";

const RootLayout = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
};

export default RootLayout;
