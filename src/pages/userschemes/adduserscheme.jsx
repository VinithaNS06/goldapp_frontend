import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import config from "../../config.json";
import { useNavigate } from "react-router-dom";

const UserSchemeAdd = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [product, setProduct] = useState("");
  const [scheme_code, setSchemeCode] = useState("");
  const [duration, setDuration] = useState("");
  const [installment, setInstallMent] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function addScheme() {
    const newScheme = {
      product,
      scheme_code,
      duration,
      installment,
      amount,
      status,
    };
    console.log(newScheme);
    fetch(config.apiurl + "/api/scheme/", {
      method: "POST",
      body: JSON.stringify(newScheme),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accesstoken.data.access_token,
      },
    })
      .then(() => toast.success("Scheme Created Sucessfully"))
      .then(() =>
        setTimeout(() => {
          navigate("/scheme");
        }, 5000)
      );
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
                      <h6 class="mb-0">Add User Scheme</h6>
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
                          value={product}
                          onChange={(e) => {
                            setProduct(e.target.value);
                          }}
                        />
                        {error && !product && (
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
                        <select
                          class="form-control"
                          type="text"
                          value={duration}
                          onChange={(e) => {
                            setDuration(e.target.value);
                          }}
                        >
                          <option>Select Duration</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                        </select>
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
                          type="number"
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
                          type="number"
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
                  </div>
                  <ToastContainer />
                  <div class="row">
                    <div class="text-end">
                      <button
                        type="button"
                        onClick={addScheme}
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

export default UserSchemeAdd;
