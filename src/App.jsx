import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import AddUser from "./pages/user/AddUser";
import Error from "./pages/error/Error";
import UserList from "./pages/user/UserList";
import AddCategory from "./pages/category/AddCategory";
import CategoryList from "./pages/category/CategoryList";
import AddProduct from "./pages/product/AddProduct";
import ProductList from "./pages/product/ProductList";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product-list" element={<ProductList />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
