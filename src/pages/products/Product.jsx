import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import config from "../../config.json";
const Product = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getProductData = async () => {
    axios
      .get(config.apiurl + "/api/products/", {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
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
                      <h6 class="mb-0">Products</h6>
                    </div>

                    <div class="col-6 text-end">
                      {/* <a
                        href="javascript:void(0);"
                        class="btn btn-outline-primary btn-sm mb-0 "
                      >
                        Import
                      </a>{" "} */}
                      &nbsp;&nbsp;
                      <a class="btn bg-gradient-dark mb-0" href="/products/add">
                        <i class="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New Product
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
                          {/* <th class="text-secondary opacity-7">
                            Product Description
                          </th> */}
                          <th class="text-secondary opacity-7 ps-2">
                            Scheme Code
                          </th>
                          <th class="text-secondary opacity-7 ps-2">
                            Duration
                          </th>
                          {/* <th class="text-secondary opacity-7 ps-2">Grams</th>
                          <th class="text-secondary opacity-7 ps-2">Rate</th>
                          <th class="text-secondary opacity-7 ps-2">
                            Installment
                          </th> */}
                          <th class="text-secondary opacity-7 ps-2">Amount</th>

                          {/* <th class="text-secondary opacity-7 ps-2">
                            Max-Amount
                          </th> */}
                          {/* <th class="text-secondary opacity-7 ps-2">
                            Amount Step Up
                          </th> */}
                          <th class="text-secondary opacity-7 ps-2">Status</th>
                          <th class="text-secondary opacity-7 ps-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            {/* <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">{item.rowid}</h6>
                                </div>
                              </div>
                            </td> */}
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-1 text-sm ">
                                    {item.product_name}
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.product_desc}
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
                                      {item.scheme_code}
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
                                      {item.duration}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            {/* <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.grams}
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
                                      {item.rate}
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
                                      {item.min_amount} - {item.max_amount}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td>
                            {/* <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.max_amount}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </td> */}
                            {/* <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs mb-2">
                                    <span class="text-dark font-weight-bold ms-sm-2">
                                      {item.amountstepup}
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
                                    navigate(`/products/edit/${item._id}`)
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

export default Product;
