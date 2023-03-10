import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import config from "../../config.json";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Report = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [payments, setPayments] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const getPaymentsData = async () => {
    axios
      .get(config.apiurl + `/api/webreport/userlist/${params.id}`, {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        setPayments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPaymentsData();
  }, []);

  return (
    <>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Reports</h6>
                    </div>
                  </div>
                </div>

                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-5">
                    <table class="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          <th class="text-secondary opacity-7">Name</th>
                          <th class="text-secondary opacity-7 ps-2">Email</th>
                          <th class="text-secondary opacity-7 ps-2">Address</th>
                          <th class="text-secondary opacity-7 ps-2">Phone</th>
                          {/* <th class="text-secondary opacity-7 ps-2">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {payments.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">{item.name}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.email}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.addresstype}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.address}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            {/* <td>
                              <div class="ms-auto">
                                <a
                                  href={`/api/payment/scheme/` + item._id}
                                  class="btn btn-link text-dark px-3 mb-0"
                                >
                                  <i
                                    class="fas fa-pencil-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </a>
                              </div>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
