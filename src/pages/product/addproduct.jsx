import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import "./product.scss";
import config from "../../config.json";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Productadd = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [products, setProducts] = useState("");
  const [error, setError] = useState("");
  const [product_id, setProduct_id] = useState("");
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
                        <label for="product name" class="form-control-label">
                          Product Name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value="product"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Product Description
                        </label>
                        <input class="form-control" type="text" value="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Product Remark
                        </label>
                        <input class="form-control" type="text" value="" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="minamount" class="form-control-label">
                          Min Amount
                        </label>
                        <input
                          class="form-control"
                          type="number"
                          value="minamount"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Max Amount
                      </label>
                      <input class="form-control" type="number" value="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Duration
                      </label>
                      <input class="form-control" type="number" value="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Status
                      </label>
                      <input class="form-control" type="number" value="" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm ms-auto mt-5"
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

export default Productadd;
