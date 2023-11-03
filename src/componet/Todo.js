import React from "react";
import todo from "../images/todo.svg";
import { useEffect } from "react";

// Get all the todos from localStorage
const getTodosFromLocalStorage = () => {
  let list = localStorage.getItem("List");

  if (list) {
    return JSON.parse(localStorage.getItem("List"));
  } else {
    return [];
  }
};

const Todo = (props) => {
  const [todos, setTodos] = React.useState("");
  const [todoArray, setTodoArray] = React.useState(getTodosFromLocalStorage());
  const [toggleSubmit, setToggleSubmit] = React.useState(true);
  const [isEditItem, setIsEditItem] = React.useState(null);

  const addTodo = () => {
    if (!todos) {
      props.showAlert("Please write todos", "danger");
    } else if (todos && !toggleSubmit) {
      setTodoArray(
        todoArray.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: todos };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setTodos("");
      setIsEditItem(null);
      props.showAlert("Todo update successfully", "success");
    } else {
      const allInputData = {
        //Generate id using date function
        id: new Date().getTime().toString(),
        name: todos,
      };
      setTodoArray([...todoArray, allInputData]);
      setTodos("");
      props.showAlert("Todo add successfully", "success");
    }
  };

  const deleteTodo = (id) => {
    const updatesTodos = todoArray.filter((currEl) => {
      return id !== currEl.id;
    });
    setTodoArray(updatesTodos);
    props.showAlert("Todo delete successfully", "success");
  };

  const removeAll = () => {
    setTodoArray([]);
    props.showAlert("All Todos deleted successfully", "success");
  };

  const edit = (id) => {
    let newEditItem = todoArray.find((elem) => {
      return elem.id === id;
    });

    setToggleSubmit(false);
    setTodos(newEditItem.name);
    setIsEditItem(id);
  };
  // Store todo item into localStorage
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <div
      className="container"
      style={{
        color: props.mode === "light" ? "black" : "white",
        border:
          props.mode === "light" ? "3px solid black" : "3px solid #4ade80",
      }}
    >
      <figure>
        <img
          src={todo}
          alt="todoLogo"
          className="rounded mx-auto d-block todoLogo"
        />
        <figcaption className="caption">Add Your todo Here</figcaption>
      </figure>
      <div className="add--todo">
        <input
          type="text"
          value={todos}
          placeholder="Add todo"
          onChange={(e) => setTodos(e.target.value)}
          style={{
            border: props.mode === "light" ? "2px solid black" : "none",
          }}
        />
        {toggleSubmit ? (
          <i className="fa fa-plus fa-fw" onClick={addTodo}></i>
        ) : (
          <i className="fa fa-edit fa-fw" onClick={addTodo}></i>
        )}
      </div>
      {todoArray.map((currEl) => {
        return (
          <div className="row" key={currEl.id}>
            <div className="col-md-2"></div>
            <h3 className="col-md-8">
              {currEl.name}
              <i
                className="fa fa-trash fa-fw"
                onClick={() => deleteTodo(currEl.id)}
              ></i>
              <i
                className="fa fa-edit fa-fw"
                onClick={() => edit(currEl.id)}
              ></i>
            </h3>
            <div className="col-md-2"></div>
          </div>
        );
      })}

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <button className="removeAll btn btn-primary" onClick={removeAll}>
            Remove All
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Todo;
