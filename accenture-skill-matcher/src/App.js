import React from 'react'
import {Route, Routes} from "react-router-dom";
import Layout from "./routes/layout/layout";
import Home from "./routes/home/home";
import Reasource from "./routes/resources/resource";
import Nomatch from "./routes/nomatch/nomatch";
//css
import './App.css';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="*" element={<Nomatch/>}/>
        </Route>
      </Routes>
  );
}
