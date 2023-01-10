import React from 'react';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Scheme from "./pages/scheme/Scheme";


import SchemeEdit from "./pages/scheme/editscheme";

import Order from "./pages/order/Order";
import Customer from "./pages/customer/Customer";
import PrivateComponent from './components/PrivateComponents';
import Report from "./pages/report/Report";
import Register from "./pages/register/Register";

// import ViewAppointment from './pages/appointment/View';
import Staff from './pages/staff/Staff';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import AddStaff from './pages/staff/addstaff';
import StaffEdit from './pages/staff/editstaff';

import Rate from './pages/rate/Rate';


import RateEdit from './pages/rate/editrate';
import RateAdd from './pages/rate/addrate';
import SchemeAdd from './pages/scheme/addscheme';
import Transaction from './pages/transaction/Transaction';
import Product from './pages/product/Product';
import ProductAdd from './pages/product/addproduct';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
			<Route path="register" element={<Register />} />
          <Route index element={<Login />} />          
          <Route element={<PrivateComponent />}  >            
            <Route path="dashboard" element={<Home />} />
            {/* <Route path="scheme" element={<Scheme />} /> */}
            {/* <Route path="scheme" element={<Scheme />} />
          
            <Route path="schem/edit/:id" element={<SchemeEdit />} />
            <Route path="scheme/add" element={<SchemeAdd />} />
            <Route path="scheme/edit" element={<SchemeEdit />} /> */}
            <Route path="order" element={<Order />} />
            <Route path="customer" element={<Customer />} />
            <Route path="report" element={<Report />} />
            <Route path="transaction" element={<Transaction/>}/>
            {/* <Route path="appointment/view/:viewid" element={<ViewAppointment/>}/> */}
            <Route path="staff" element={<Staff/>}/>
            <Route path="staff/add" element={<AddStaff/>}/>
            <Route path="staff/edit" element={<StaffEdit/>}/>
            <Route path="staff/edit/:editid" element={<StaffEdit/>}/>
            <Route path="rate/add" element={<RateAdd/>}/>
            <Route path="rate/edit" element={<RateEdit/>}/>
            <Route path="rate/edit/:id" element={<RateEdit/>}/>
            <Route path="rate" element={<Rate/>}/>
           <Route path="products" element={<Product/>}/>
           <Route path="products/add" element={<ProductAdd/>}/>
           <Route path="scheme" element={<Scheme/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
