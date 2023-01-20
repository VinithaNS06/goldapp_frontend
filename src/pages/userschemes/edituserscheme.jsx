import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import config from "../../config.json";
import { useNavigate, useParams } from "react-router-dom";

const UserSchemeEdit = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [scheme_name, setSchemeName] = useState("");
  const [scheme_code, setSchemeCode] = useState("");
  const [duration, setDuration] = useState("");
  const [installment, setInstallMent] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getUserSchemeView();
  }, []);
  const updateuserScheme = async () => {
    const headers = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + accesstoken.data.access_token,
      },
      body: JSON.stringify({
        scheme_name,
        scheme_code,
        duration,
        installment,
        amount,
        status,
      }),
    };
    fetch(config.apiurl + `/api/scheme/${params.id}`, headers)
      .then(() => toast("Scheme Updated Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/scheme");
        }, 5000)
      );
  };

  const getUserSchemeView = async () => {
    let ProductDetails = await fetch(
      config.apiurl + `/api/scheme/${params.id}`,
      {
        method: "get",
        headers: {
          Authorization: "bearer " + accesstoken.data.access_token,
        },
      }
    );
    ProductDetails = await ProductDetails.json();

    setSchemeName(ProductDetails.data[0].scheme_name);
    setSchemeCode(ProductDetails.data[0].scheme_code);
    setDuration(ProductDetails.data[0].duration);
    setInstallMent(ProductDetails.data[0].installment);
    setAmount(ProductDetails.data[0].amount);
    setStatus(ProductDetails.data[0].status);
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
                      <h6 class="mb-0">Edit User Scheme</h6>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Product Name
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={scheme_name}
                          onChange={(e) => {
                            setSchemeName(e.target.value);
                          }}
                        />
                        {error && !scheme_name && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Product Name
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Scheme Code
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={scheme_code}
                          onChange={(e) => {
                            setSchemeCode(e.target.value);
                          }}
                        />
                        {error && !scheme_code && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Scheme Code
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Duration
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={duration}
                          onChange={(e) => {
                            setDuration(e.target.value);
                          }}
                        />
                        {error && !duration && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Duration
                          </span>
                        )}
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Installment
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={installment}
                          onChange={(e) => {
                            setInstallMent(e.target.value);
                          }}
                        />
                        {error && !installment && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Installment
                          </span>
                        )}
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Amount
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value);
                          }}
                        />
                        {error && !amount && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Amount
                          </span>
                        )}
                      </div>
                    </div>
                    {/* <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Maximum Amount
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          value={max_amount}
                          onChange={(e) => {
                            setMaxAmount(e.target.value);
                          }}
                        />
                        {error && !max_amount && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Maximum Amount
                          </span>
                        )}
                      </div>
                    </div> */}
                    <div class="col-md-4">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Status
                        </label>
                        <select
                          class="form-control"
                          type="text"
                          value={status}
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                        >
                          <option>Select Status</option>
                          <option>Active</option>
                          <option>InActive</option>
                        </select>
                        {error && !status && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Status
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        onClick={updateuserScheme}
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

export default UserSchemeEdit;
