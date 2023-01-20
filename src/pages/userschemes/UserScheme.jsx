import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import config from "../../config.json";
const UserScheme = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate();
  const getSchemeData = async () => {
    axios
      .get(config.apiurl + "/api/scheme/paymentdetails", {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        setSchemes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSchemeData();
  }, []);
  return (
    <>
      <div class="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar />
      <main className="main-content position-relative border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">User Schemes</h6>
                    </div>

                    <div class="col-6 text-end">
                      &nbsp;&nbsp;
                      <a class="btn bg-gradient-dark mb-0" href="/scheme/add">
                        <i class="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New User Scheme
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-5">
                    <table class="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          <th class="text-secondary opacity-7 ps-2">
                            Scheme Name
                          </th>
                          <th class="text-secondary opacity-7 ps-2">
                            Total Pay
                          </th>
                          <th class="text-secondary opacity-7 ps-2">
                            Duration
                          </th>
                          {/* <th class="text-secondary opacity-7 ps-2">
                            Installment
                          </th> */}
                          <th class="text-secondary opacity-7 ps-2">Amount</th>
                          <th class="text-secondary opacity-7 ps-2">Status</th>
                          <th class="text-secondary opacity-7 ps-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schemes.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>

                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">
                                    {item.product_name}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">
                                    {item.user_total_pay}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">{item.duration}</h6>
                                </div>
                              </div>
                            </td>

                            {/* <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.installment}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td> */}
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.amount}
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
                                      {item.status}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ms-auto">
                                <a
                                  class="btn btn-link text-dark px-3 mb-0"
                                  onClick={() =>
                                    navigate(`/scheme/edit/${item._id}`)
                                  }
                                >
                                  <i
                                    class="fas fa-pencil-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </a>
                              </div>
                            </td>
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

export default UserScheme;
