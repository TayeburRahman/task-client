import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegistrationMutation } from "../../features/auth/authApi";

const SignUp = () => {
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [rePasswordStatus, setRePasswordStatus] = useState(false);

  const navigate = useNavigate();
  const [isCheckBox, setCheckBox] = useState(false);
  const [registration, { data: userData, error: responseError }] =
    useRegistrationMutation();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelCheckBox = () => {
    setCheckBox((prev) => !prev);
  };

  const onSubmit = async (data) => { 
    if (data?.password !== data?.confirmPassword) {
      setError("Passwords do not match. Please check and try again.");
    } else {
      setError('');
      await registration(data);
    }
  };

  useEffect(
    () => {
      if (userData?.status === "error") {
        setError(userData?.message);
      } 

      if (userData?.status === "success") {
        toast(userData?.message, {
          type: userData?.status,
          position: toast.POSITION.BOTTOM_RIGHT
        }); 
        navigate("/login");
      }
    }, [userData, responseError, error]  );

  const handelOnPassword = () => {
    setPasswordStatus((prev) => !prev);
  };

  const handelOnRePassword = () => {
    setRePasswordStatus((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                <div
                  className="card-header  text-center"
                  style={{ background: "#F8F9FA" }}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <span> 
                    <h4 className="logo">Tasks</h4>
                    </span>
                  </Link>
                </div>

                <div className="card-body auth_">
                  <div className="text-center w-85 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold">
                      Sign Up
                    </h4>
                    <p className="text-muted" style={{ marginTop: "-5px" }}>
                      Create a new account, it takes less than a minute.{" "}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2 text-start">
                      <label htmlFor="displayName" className="form-label m-0 input_name">
                        Full Name
                      </label>
                      <input
                        className="form-control input_auth"
                        type="text"
                        id="displayName"
                        placeholder="Enter your name"
                        {...register("displayName", {
                          required: "Name is required",
                        })}
                      />
                    </div>

                    <div className="mb-2 text-start">
                      <label htmlFor="email" className="form-label m-0 input_name">
                        Email address
                      </label>
                      <input
                        className="form-control input_auth"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                    </div>

                    <div className="mb-2 text-start input_name">
                      <label
                        htmlFor="password"
                        className="form-label text-start m-0"
                      >
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type={passwordStatus ? "text" : "password"}
                          id="password"
                          className="form-control input_auth"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "Password is required",
                          })}
                        />
                        <div className="input-group-text p-0">
                          <button onClick={handelOnPassword} type="button" className="button_password">
                            <span className="password-eye">
                              {passwordStatus ? (
                                <VisibilityOffIcon className="OnPassword" />
                              ) : (
                                <VisibilityIcon className="OnPassword" />
                              )}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 text-start">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label text-start m-0 input_name"
                      >
                        Re Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type={rePasswordStatus ? "text" : "password"}
                          id="confirmPassword"
                          className="form-control input_auth"
                          placeholder="Enter Re password"
                          {...register("confirmPassword", {
                            required: "Password is required",
                          })}
                        />
                        <div className="input-group-text p-0">
                          <button onClick={handelOnRePassword} type="button" className="button_password">
                            <span className="password-eye">
                              {rePasswordStatus ? (
                                <VisibilityOffIcon className="OnPassword" />
                              ) : (
                                <VisibilityIcon className="OnPassword" />
                              )}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="form-check text-start">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-signin"
                          onClick={handelCheckBox}
                        />
                        <label
                          className="form-check-label stay_"
                          htmlFor="checkbox-signup"
                        >
                          I accept{" "}
                          <a href="/" className="text-muted">
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>

                    <div className="mb-22 text-center">
                      <button
                        className="auth_button"
                        type="submit"
                        id={!isCheckBox && "on_button"}
                        disabled={isCheckBox === true ? false : true}
                        style={{
                          background: "#1560FF",
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row mt-0">
                <div className="col-12 text-center">
                  <p className="text-muted m-1 stay_">
                    Already have account?{" "}
                    <Link to="/login" className="text-muted ms-1">
                      <b>Log In</b>
                    </Link>
                  </p>
                </div>
              </div>

              {/* {error && (
                <Alert severity="error">
                  <AlertTitle>
                    <Typography pt={0.5} variant="body2" gutterBottom>
                      <strong>Check</strong> - {error ? error : ""}
                    </Typography>
                  </AlertTitle>
                </Alert>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
