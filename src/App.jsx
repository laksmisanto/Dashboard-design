import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import AddUser from "./pages/user/AddUser";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
