import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
import "./scheme.scss";
import config from "../../config.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [schemes, setSchemes] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const getSchemeData = async () => {
    axios
      .get(config.apiurl + "/api/scheme/", {
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
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Scheme</h6>
                    </div>

                    {/* <div class="col-6 text-end">
                                    <a href="javascript:void(0);" class="btn btn-outline-primary btn-sm mb-0 "  >Import</a> &nbsp;&nbsp;
                                    <a href="/category/add" class="btn btn-outline-primary btn-sm mb-0 ">Add New</a>
                                </div> */}
                  </div>
                </div>

                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-5">
                    <table class="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th class="text-secondary opacity-7 ps-2">S.No</th>
                          <th class="text-secondary opacity-7 ps-2">Product</th>
                          <th class="text-secondary opacity-7">Duration</th>
                          <th class="text-secondary opacity-7">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schemes.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{item.product}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">{item.duration}</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="ms-auto">
                                <a class="btn btn-link text-dark px-3 mb-0">
                                  <i
                                    class="fas fa-pencil-alt text-dark me-2"
                                    aria-hidden="true"
                                  ></i>
                                  Edit
                                </a>
                                {/* <a class="btn btn-link text-danger text-gradient px-3 mb-0" onClick={()=> deleteCategory(item._id)}><i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete</a> */}
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
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-header pb-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Add/Edit Scheme</h6>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Product
                        </label>
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Enter Scheme name"
                          required
                          value={schemes}
                          onChange={(e) => {
                            setSchemes(e.target.value);
                          }}
                        />
                        {error && !schemes && (
                          <span class="text-danger text-gradient text-xs text-secondary">
                            Enter the Scheme Name
                          </span>
                        )}
                      </div>
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

export default Category;
