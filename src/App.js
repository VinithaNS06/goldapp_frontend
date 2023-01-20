import React from 'react';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


import Order from "./pages/order/Order";
import Customer from "./pages/customer/Customer";
import PrivateComponent from './components/PrivateComponents';
import Report from "./pages/report/Report";
import Register from "./pages/register/Register";

import Staff from './pages/staff/Staff';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import AddStaff from './pages/staff/addstaff';
import StaffEdit from './pages/staff/editstaff';

import Rate from './pages/rate/Rate';


import RateEdit from './pages/rate/editrate';
import RateAdd from './pages/rate/addrate';

import Transaction from './pages/transaction/Transaction';

import Product from './pages/products/Product';
import ProductAdd from './pages/products/addproduct';
import ProductEdit from './pages/products/editproduct';
import UserScheme from './pages/userschemes/UserScheme';
import UserSchemeAdd from './pages/userschemes/adduserscheme';
import UserSchemeEdit from './pages/userschemes/edituserscheme';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
			<Route path="register" element={<Register />} />
          <Route index element={<Login />} />          
          <Route element={<PrivateComponent />}  >            
            <Route path="dashboard" element={<Home />} />
            <Route path="products" element={<Product />} />
            <Route path="products/edit/:id" element={<ProductEdit />} />
            <Route path="products/add" element={<ProductAdd/>} />
            <Route path="products/edit" element={<ProductEdit />} />
            <Route path="order" element={<Order />} />
            <Route path="customer" element={<Customer />} />
            <Route path="report" element={<Report />} />
            <Route path="transaction" element={<Transaction/>}/>
            
            <Route path="staff" element={<Staff/>}/>
            <Route path="staff/add" element={<AddStaff/>}/>
            <Route path="staff/edit" element={<StaffEdit/>}/>
            <Route path="staff/edit/:editid" element={<StaffEdit/>}/>
            <Route path="rate/add" element={<RateAdd/>}/>
            <Route path="rate/edit" element={<RateEdit/>}/>
            <Route path="rate/edit/:id" element={<RateEdit/>}/>
            <Route path="rate" element={<Rate/>}/>
            <Route path="scheme" element={<UserScheme/>}/>
            <Route path="scheme/add" element={<UserSchemeAdd/>}/>
            <Route path="scheme/edit" element={<UserSchemeEdit/>}/>
            <Route path="scheme/edit/:id" element={<UserSchemeEdit/>}/>
            <Route path="transaction" element={<Transaction/>}/>
            <Route path="transaction/edit/:id" element={<Transaction/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
