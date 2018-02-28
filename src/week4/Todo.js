import React from "react";
import { observe } from 'parket/react';
import PropTypes from "prop-types";

function Todo(
  {
    text,
    isDone,
    toggleTodoDone,
    deleteTodo,
    todo
  }
) {
  return (
    <div>
      <div className="view">
        <input
          checked={todo.isDone}
          onChange={todo.toggleIsDone}
          className="toggle"
          type="checkbox"
        />
        <label>{todo.text}</label>
        <button onClick={todo.deleteTodo} className="destroy" />
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </div>
  );
}

export default observe(Todo);

Todo.displayName = "Todo";

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
