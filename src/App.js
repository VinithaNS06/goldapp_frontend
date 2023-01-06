import React from 'react';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Scheme from "./pages/scheme/Scheme";
import Product from "./pages/product/Product";
import AddProduct from "./pages/product/addproduct";
import EditProduct from "./pages/product/editproduct";
import SchemeEdit from "./pages/scheme/editscheme";
import Order from "./pages/order/Order";
import Customer from "./pages/customer/Customer";
import PrivateComponent from './components/PrivateComponents';
import Report from "./pages/report/Report";
import Register from "./pages/register/Register";
import Appointment from './pages/appointment/Appointment';
import ViewAppointment from './pages/appointment/View';
import Staff from './pages/staff/Staff';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import AddStaff from './pages/staff/addstaff';
import StaffEdit from './pages/staff/editstaff';
import AddScheme from './pages/scheme/addscheme';
import Rate from './pages/rate/Rate';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
			<Route path="register" element={<Register />} />
          <Route index element={<Login />} />          
          <Route element={<PrivateComponent />}  >            
            <Route path="dashboard" element={<Home />} />
            <Route path="scheme" element={<Scheme />} />
            <Route path="product" element={<Product />} />
            <Route path="product/add" element={<AddProduct />} />
            <Route path="product/edit/:editid" element={<EditProduct />} />
            <Route path="scheme/add" element={<AddScheme />} />
            <Route path="scheme/edit" element={<SchemeEdit />} />
            <Route path="order" element={<Order />} />
            <Route path="customer" element={<Customer />} />
            <Route path="report" element={<Report />} />
            <Route path="appointment" element={<Appointment/>}/>
            <Route path="appointment/view/:viewid" element={<ViewAppointment/>}/>
            <Route path="staff" element={<Staff/>}/>
            <Route path="staff/add" element={<AddStaff/>}/>
            <Route path="staff/edit" element={<StaffEdit/>}/>
            <Route path="staff/edit/:editid" element={<StaffEdit/>}/>
            <Route path="rate" element={<Rate/>}/>
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
