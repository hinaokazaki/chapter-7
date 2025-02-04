import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import Home from "./page/Home";
import Details from "./page/Details";
import Contact from "./page/Contact";

function App(): React.JSX.Element {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Details />} /> {/* :idはParam.idで受け取るIdという意味 */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
