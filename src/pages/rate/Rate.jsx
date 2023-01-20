import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/headerbar/Header";
// import "./product.scss";
import config from "../../config.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Rate = () => {
  const accesstoken = JSON.parse(localStorage.getItem("user"));
  const [rates, setRates] = useState([]);

  const navigate = useNavigate();
  const getRateData = async () => {
    axios
      .get(config.apiurl + "/api/rate/", {
        headers: {
          Authorization: "Bearer " + accesstoken.data.access_token,
        },
      })
      .then((res) => {
        setRates(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRateData();
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
                      <h6 class="mb-0">Rates</h6>
                    </div>

                    <div class="col-6 text-end">
                      {/* <a
                        href="javascript:void(0);"
                        class="btn btn-outline-primary btn-sm mb-0 "
                      >
                        Import
                      </a>{" "} */}
                      &nbsp;&nbsp;
                      <a class="btn bg-gradient-dark mb-0" href="/rate/add">
                        <i class="fas fa-plus" aria-hidden="true"></i>
                        &nbsp;&nbsp;Add New Rate
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
                          {/* <th class="text-secondary opacity-7 ps-2">Name</th> */}
                          {/* <th class="text-secondary opacity-7">Row ID</th> */}
                          <th class="text-secondary opacity-7 ps-2">Type</th>
                          <th class="text-secondary opacity-7 ps-2">Rate</th>
                          <th class="text-secondary opacity-7 ps-2">Status</th>
                          <th class="text-secondary opacity-7 ps-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rates.map((item, index) => (
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
                                  <h6 class="mb-1 text-sm ">{item.type}</h6>
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
                                    navigate(`/rate/edit/${item._id}`)
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

export default Rate;
