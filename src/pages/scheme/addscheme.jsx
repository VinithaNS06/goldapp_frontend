import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import "./scheme.scss";
import config from "../../config.json";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const SchemeAdd = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  // const [userid, setUserid] = useState("");
  // const [product, setProduct] = useState("");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  function addScheme() {
    const newScheme = {
      // userid,
      // product,
      amount,
      duration,
      status,
    };
    fetch(config.apiurl + "/api/scheme/", {
      method: "POST",
      body: JSON.stringify(newScheme),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    }).then(() => navigate("/scheme"));
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
                      <h6 class="mb-0">Add Scheme</h6>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <p class="text-uppercase text-sm">Scheme Information</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        {/* <TextField
                          onChange={(event) => setUserid(event.target.value)}
                          label="UserId"
                          variant="outlined"
                        /> */}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        {/* <TextField
                          onChange={(event) => setProduct(event.target.value)}
                          label="Product"
                          variant="outlined"
                        /> */}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setAmount(event.target.value)}
                          label="Amount"
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
                          onChange={(event) => setStatus(event.target.value)}
                          label="Status"
                          variant="outlined"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm ms-auto mt-5"
                        onClick={addScheme}
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

export default SchemeAdd;
