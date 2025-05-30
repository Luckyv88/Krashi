import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Home1 from "./Component/Home1";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Complaints from "./Component/Complaints";

import Successlogin from "./Businessman/Successlogin";
import BusinessmanMyprofile from "./Businessman/BusinessmanMyprofile";
import Notloge from "./Businessman/Notloge";
import Interested from "./Businessman/Interested";
import Businessmanupdate from "./Businessman/Businessmanupdate";
import Status from "./Businessman/Status";

import Successloged from "./Farmer/Sucessloged";
import FarmerMyprofile from "./Farmer/FarmerMyprofile";
import Notloged from "./Farmer/Notloged";
import AddProduct from "./Farmer/AddProduct";
import FarmerUpdateMyprofile from "./Farmer/FarmerUpdateMyprofile";
import Viewproduct from "./Farmer/Viewproduct";
import Update from "./Farmer/Update";
import Update1 from "./Farmer/Update1";
import Delete from "./Farmer/Delete";
import Delete1 from "./Farmer/Delete1";
import Interestfarmer from "./Farmer/Interestfarmer";

import Admin from "./Adminroot/Admin";
import Allfarmer from "./Adminroot/Allfarmer";
import Allbusinessman from "./Adminroot/Allbusinessman";
import AdminComplaints from "./Adminroot/AdminComplaints";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home1/:language" element={<Home1 />} />

        {/* Businessman Routes */}
        <Route path="/Businessman/successlogin/:language" element={<Successlogin />} />
        <Route path="/Businessman/BusinessmanMyprofile/:language" element={<BusinessmanMyprofile />} />
        <Route path="/Businessman/Notloge/:language" element={<Notloge />} />
        <Route path="/Businessman/Interested/:language" element={<Interested />} />
        <Route path="/Businessman/Businessmanupdate/:language" element={<Businessmanupdate />} />
        <Route path="/Businessman/Status/:language" element={<Status />} />

        {/* Farmer Routes */}
        <Route path="/Farmer/Successloged/:language" element={<Successloged />} />
        <Route path="/Farmer/Farmermyprofile/:language" element={<FarmerMyprofile />} />
        <Route path="/Farmer/Notloged/:language" element={<Notloged />} />
        <Route path="/Farmer/Addproduct/:language" element={<AddProduct />} />
        <Route path="/Farmer/FarmerUpdateMyprofile/:language" element={<FarmerUpdateMyprofile />} />
        <Route path="/Farmer/Viewproduct/:language" element={<Viewproduct />} />
        <Route path="/Farmer/Update/:language" element={<Update />} />
        <Route path="/Farmer/Update1/:language/:id" element={<Update1 />} />
        <Route path="/Farmer/delete/:language" element={<Delete />} />
        <Route path="/Farmer/delete1/:language/:product_id" element={<Delete1 />} />
        <Route path="/Farmer/Interestfarmer/:language" element={<Interestfarmer />} />

        {/* General Routes */}
        <Route path="/login/:language" element={<Login />} />
        <Route path="/register/:language" element={<Register />} />
        <Route path="/Component/Complaints/:language" element={<Complaints />} />

        {/* Admin Routes */}
        <Route path="/Adminroot/Admin/:language" element={<Admin />} />
        <Route path="/Adminroot/Allbusinessman/:language" element={<Allbusinessman />} />
        <Route path="/Adminroot/Allfarmer/:language" element={<Allfarmer />} />
        <Route path="/Adminroot/AdminComplaints/:language" element={<AdminComplaints />} />

        {/* Redundant Route Cleaned Below */}
        {/* <Route path="/update/:product_id" element={<Update1 />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
