import React, { useState } from "react";
import { Button } from "../Ui/Button";
import "./Modal.css";

export function Input({
  addTodoHandler,
  setOpen,
  title,
  img,
  rating,
  setTitle,
  setRating,
  setImg,
  id,
  openEdit,
  saveHandler,
}) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    setTitle(newValue);
    localStorage.setItem("inputValue", newValue);
  };
  const imgHandleChange = (e) => {
    setImg(e.target.value);
  };
  const ratingHandleChange = (e) => {
    setRating(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random().toString(),
      title: title,
      img: img,
      rating: rating,
    };
    addTodoHandler(data);
    setOpen(false);
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className="wrapper">
      <form>
        <div className="modal">
          <div className="cont_modal">
            <label>Movie:</label>
            <input type="text" onChange={handleChange} value={title} />
            <label>Image:</label>
            <input type="text" onChange={imgHandleChange} value={img} />
            <label>Rating:</label>
            <input type="number" onChange={ratingHandleChange} value={rating} />
          </div>
          <div className="btn">
            <Button child={"Cancel"} color={"red"} onClick={cancelHandler} />
            {openEdit ? (
              <Button
                child={"Update"}
                color={"green"}
                onClick={(e) => saveHandler(e, id)}
              />
            ) : (
              <Button child={"Add"} color={"blue"} onClick={submitHandler} />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
