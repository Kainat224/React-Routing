import React, { useState } from "react";
import { AiOutlineFileText, AiFillPlusCircle } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const TodosList = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      toast.error("Enter Your Todo", {
        position: "top-center",
        draggable: true,
      });
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  return (
    <>
      <div className="main-div container d-flex  justify-content-center align-items-center flex-column mt-5">
        <div className="child-div">
          <AiOutlineFileText className="custom-icon" />
          <h5 className="my-4">Add your Todos List Here </h5>
        </div>

        <div className="addItem my-4 border border-black py-2 px-3">
          <input
            type="text"
            placeholder="Add Items..."
            className="border-0"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <AiFillPlusCircle
            className="custom-plus-icon"
            title="Add Item"
            onClick={addItem}
          />
          <ToastContainer />
        </div>

        <div className="showItem">
          <div className="eachItem d-flex  justify-content-center align-items-center border border-black px-3 py-1">
            <h3 className="mx-3">Apple</h3>
            <BsTrash3 />
          </div>
        </div>

        <div className="btn btn-primary my-4">Check List</div>
      </div>
    </>
  );
};

export default TodosList;
