import React from "react";

function Navebar() {
  return (
    <div>
      {/* Navbar Start */}
      <div
        className="container-fluid border-bottom wow fadeIn"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#90765F" }} // خلفية بيج فاتحة
      >
        <div
          className="container topbar d-none d-lg-block py-2"
          style={{
            backgroundColor: "#5b3e1b", // بني غامق بدل bg-primary
            borderRadius: "0 40px",
          }}
        >
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i
                  className="fas fa-map-marker-alt me-2"
                  style={{ color: "#c4a76a" }}
                ></i>
                <a href="#" style={{ color: "white" }}>
                  123 Jungle Street, Africa
                </a>
              </small>
              <small className="me-3">
                <i
                  className="fas fa-envelope me-2"
                  style={{ color: "#c4a76a" }}
                ></i>
                <a href="#" style={{ color: "white" }}>
                  info@animalworld.com
                </a>
              </small>
            </div>

            <div className="top-link pe-2">
              <a
                href="#"
                className="btn btn-light btn-sm-square rounded-circle"
              >
                <i
                  className="fab fa-facebook-f"
                  style={{ color: "#5b3e1b" }}
                ></i>
              </a>
              <a
                href="#"
                className="btn btn-light btn-sm-square rounded-circle"
              >
                <i className="fab fa-twitter" style={{ color: "#5b3e1b" }}></i>
              </a>
              <a
                href="#"
                className="btn btn-light btn-sm-square rounded-circle"
              >
                <i
                  className="fab fa-instagram"
                  style={{ color: "#5b3e1b" }}
                ></i>
              </a>
              <a
                href="#"
                className="btn btn-light btn-sm-square rounded-circle me-0"
              >
                <i
                  className="fab fa-linkedin-in"
                  style={{ color: "#5b3e1b" }}
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-xl py-3">
            <a href="#" className="navbar-brand">
              <h1 className="display-6">
                <span style={{ color: "#3f2b14" }}>Animal</span>
                <span style={{ color: "#e59d54c6" }}>World</span>
              </h1>
            </a>

            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" style={{ color: "#5b3e1b" }}></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <a href="#" className="nav-item nav-link" style={{ color: "#3f2b14" }}>
                  Home
                </a>
                <a href="#" className="nav-item nav-link" style={{ color: "#3f2b14" }}>
                  About
                </a>
                <a href="#" className="nav-item nav-link" style={{ color: "#3f2b14" }}>
                  Services
                </a>
                <a href="#" className="nav-item nav-link" style={{ color: "#3f2b14" }}>
                  Programs
                </a>
                <a href="#" className="nav-item nav-link" style={{ color: "#3f2b14" }}>
                  Events
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ color: "#3f2b14" }}
                  >
                    Pages
                  </a>
                  <div
                    className="dropdown-menu m-0 rounded-0"
                    style={{ backgroundColor: "#c4a76a" }}
                  >
                    <a href="#" className="dropdown-item" style={{ color: "#3f2b14" }}>
                      Our Blog
                    </a>
                    <a href="#" className="dropdown-item" style={{ color: "#3f2b14" }}>
                      Our Team
                    </a>
                    <a href="#" className="dropdown-item" style={{ color: "#3f2b14" }}>
                      Testimonial
                    </a>
                    <a href="#" className="dropdown-item" style={{ color: "#3f2b14" }}>
                      404 Page
                    </a>
                  </div>
                </div>

                <a href="#" className="nav-item nav-link" style={{ color: "#3f2b14" }}>
                  Contact
                </a>
              </div>

              <div className="d-flex me-4">
                <div
                  id="phone-tada"
                  className="d-flex align-items-center justify-content-center"
                >
                  <a
                    href="#"
                    className="position-relative wow tada"
                    data-wow-delay=".9s"
                  >
                    <i
                      className="fa fa-phone-alt fa-2x me-4"
                      style={{ color: "#9c6b3b" }}
                    ></i>
                    <div
                      className="position-absolute"
                      style={{ top: "-7px", left: "20px" }}
                    >
                      <span>
                        <i
                          className="fa fa-comment-dots"
                          style={{ color: "#c4a76a" }}
                        ></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div
                  className="d-flex flex-column pe-3 border-end"
                  style={{ borderColor: "#9c6b3b" }}
                >
                  <span style={{ color: "#5b3e1b" }}>Have any questions?</span>
                  <a href="#">
                    <span style={{ color: "#9c6b3b" }}>
                      Free: +0123 456 7890
                    </span>
                  </a>
                </div>
              </div>

              <button
                className="btn-search btn btn-md-square rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                style={{
                  backgroundColor: "#5b3e1b",
                  color: "white",
                }}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}

export default Navebar;
