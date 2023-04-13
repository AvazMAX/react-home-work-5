import React from "react";
import { Button } from "../../Ui/Button";
import "./InputIem.css";

export function InputItem({
  todos,
  setTodos,
  todoValue,
  imgValue,
  ratingValue,
  id,
  opoenModalHandler,
  setTitle,
  setRating,
  setImg,
  editeOpenHandler,
}) {
  function delte(id) {
    setTodos([...todos].filter((el) => el.id !== id));
  }

  function edit() {
    console.log("edit");
    opoenModalHandler();
    setImg(imgValue);
    setRating(ratingValue);
    setTitle(todoValue);
    editeOpenHandler();
  }

  return (
    <div className="ata">
      <div className="container_content">
        <div className="cont">
          <img src={imgValue} className="img" />
        </div>
        <div className="cont_btn">
          <h2>{todoValue}</h2>
          <div className="lk">
            <p className="star">{ratingValue} / 5 stars</p>
            <Button color={"red"} child={"DELETE"} onClick={() => delte(id)} />
            <Button color={"blue"} child={"EDIT"} onClick={edit} />
          </div>
        </div>
      </div>
    </div>
  );
}
