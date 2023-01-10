import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import TextField from "@mui/material/TextField";
import config from "../../config.json";
const RateEdit = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const { editid } = useParams();
  const [rate, setRate] = useState(null);
  useEffect(() => {
    fetch(config.apiurl + `/api/rate/` + { editid })
      .then((data) => data.json())
      .then((rt) => setRate(rt));
  }, [editid]);

  const [rowid, setRowId] = useState("");
  const [type, setType] = useState("");
  const [rates, setRates] = useState("");
  const [statuss, setStatuss] = useState("");

  const navigate = useNavigate();
  const editRates = () => {
    const updatedRate = {
      rowid,
      type,
      rates,
      statuss,
    };
    console.log(updatedRate);
    fetch(config.apiurl + "/api/rate/" + editid, {
      method: "PUT",
      body: JSON.stringify(updatedRate),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/rate"));
  };

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
                      <h6 class="mb-0">Edit Rate</h6>
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
                          onChange={(event) => setRates(event.target.value)}
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
                          onChange={(event) => setStatuss(event.target.value)}
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
                        onClick={editRates}
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

export default RateEdit;
