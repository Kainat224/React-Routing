import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Features = () => {
  const diffToast = () => {
    toast.success("Login Successfully :)", {
      position: "top-center",
      draggable: true,
    });
  };
  return (
    <>
      <div className="container mt-4">
        <h2>Welcome to Features page!</h2>
        <button className="btn btn-primary" onClick={diffToast}>
          Login
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default Features;
