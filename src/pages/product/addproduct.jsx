import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import TextField from "@mui/material/TextField";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [product_id, setProductId] = useState("");
  const [product_name, setProductName] = useState("");
  const [product_desc, setProductDesc] = useState("");
  const [product_remark, setProductRemark] = useState("");
  const [duration, setDuration] = useState("");
  const [installment, setInstallMent] = useState("");
  const [min_amount, setMinAmount] = useState("");
  const [max_amount, setMaxAmount] = useState("");
  //   const [status, setStatus] = useState("");
  const navigate = useNavigate();
  function addProduct() {
    const newProduct = {
      product_id,
      product_name,
      product_desc,
      product_remark,
      duration,
      installment,
      min_amount,
      max_amount,
    };
    console.log(newProduct);
    fetch(config.apiurl + "/api/products/", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    }).then(() => navigate("/products"));
  }

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
                      <h6 class="mb-0">Add Product</h6>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <p class="text-uppercase text-sm">Product Information</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setProductId(event.target.value)}
                          label="ProductId"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) =>
                            setProductName(event.target.value)
                          }
                          label="Productname"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) =>
                            setProductDesc(event.target.value)
                          }
                          label="ProductDesc"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) =>
                            setProductRemark(event.target.value)
                          }
                          label="ProductRemark"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setDuration(event.target.value)}
                          label="Duration"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) =>
                            setInstallMent(event.target.value)
                          }
                          label="Installment"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setMinAmount(event.target.value)}
                          label="MinAmount"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setMaxAmount(event.target.value)}
                          label="MaxAmount"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    {/* <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setStatus(event.target.value)}
                          label="Status"
                          variant="outlined"
                        />
                      </div>
                    </div> */}
                  </div>
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm ms-auto mt-5"
                        onClick={addProduct}
                      >
                        Submit
                      </button>
                    </div>
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

export default ProductAdd;
