import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/Form";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form></Form>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
