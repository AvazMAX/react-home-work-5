import React from "react";
import "./Header.css";
import { useState } from "react";
import TodoList, { Input } from "../Modal/Input";
import { InputItem } from "../Input/item/InputItem";
import { Button } from "../Ui/Button";

export function Header({
  addTodoHandler,
  todos,
  opoenModalHandler,
  open,
  setOpen,
  setTodos,
}) {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  const editeOpenHandler = () => {
    setOpenEdit(true);
  };
  const addTodoHandler2 = () => {
    opoenModalHandler();
    setOpenEdit(false);
  };
  const saveHandler = (e, id) => {
    e.preventDefault();
    todos.map((item) => {
      console.log(id);
      // if (item.title !== title) {
        item.title = title;
        item.rating = rating;
        item.img = img;
      // }
    });
    setOpen(false);
  };
  return (
    <div>
      <header>
        <div>
          <h1>Favorite movies</h1>
          <Button
            color={"orange"}
            child={"ADD MOVIE"}
            onClick={addTodoHandler2}
          />
        </div>
      </header>
      {open ? (
        <Input
          open={open}
          setOpen={setOpen}
          addTodoHandler={addTodoHandler}
          title={title}
          img={img}
          rating={rating}
          setTitle={setTitle}
          setRating={setRating}
          setImg={setImg}
          todos={todos}
          openEdit={openEdit}
          editeOpenHandler={editeOpenHandler}
          saveHandler={saveHandler}
        />
      ) : (
        <p></p>
      )}

      {todos.map((el) => {
        return (
          <>
            <InputItem
              id={el.id}
              setTodos={setTodos}
              todos={todos}
              todoValue={el.title}
              imgValue={el.img}
              ratingValue={el.rating}
              opoenModalHandler={opoenModalHandler}
              setTitle={setTitle}
              setRating={setRating}
              setImg={setImg}
              editeOpenHandler={editeOpenHandler}
            />
          </>
        );
      })}
    </div>
  );
}
