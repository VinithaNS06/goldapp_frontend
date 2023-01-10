import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import TextField from "@mui/material/TextField";
import axios from "axios";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
const RateAdd = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [Raterowid, setRowId] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  function addRate() {
    const newRate = {
      Raterowid,
      rate,
      type,
      status,
    };
    fetch(config.apiurl + "/api/rate/", {
      method: "POST",
      body: JSON.stringify(newRate),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    }).then(() => navigate("/rate"));
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
                      <h6 class="mb-0">Add Rate</h6>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <p class="text-uppercase text-sm">Rate Information</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setRowId(event.target.value)}
                          label="RowID"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setRate(event.target.value)}
                          label="Rate"
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <TextField
                          onChange={(event) => setType(event.target.value)}
                          label="Type"
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
                        onClick={addRate}
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

export default RateAdd;
