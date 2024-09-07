import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "~/pages/Sibade/Category";

const ContentRouter = () => {
  return (
    <div style={{ flex:1}}>
      <Routes>
        <Route path="categories" element={<div><Category/></div>} />
        <Route path="info-by-category" element={<div>info-by-category</div>} />
        <Route path="fiter-by-category" element={<div>fiter-by-category</div>}/>
        <Route path="brand" element={<div>brand</div>} />
    </Routes>
    </div>
  );
};

export default ContentRouter;
