import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/components/Header/Header";
import Home from "./page/Home/Home";
import MyPage from "./page/MyPage/MyPage";
import PrivateRoutes from "./common/components/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/mypage' element={<MyPage />} />
        </Route>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
