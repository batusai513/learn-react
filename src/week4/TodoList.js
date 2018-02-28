import React from "react";
import PropTypes from "prop-types";
import { observe } from "parket/react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    const { store, list, toggleTodoDone, deleteTodo } = this.props;
    return <ul className="todo-list">{renderList(store.todos)}</ul>;

    function renderList(list) {
      return list.map((todo, idx) => (
        <li key={todo.text} className={`${todo.isDone ? "completed" : ""}`}>
          <Todo
            todo={todo}
          />
        </li>
      ));
    }
  }
}

export default observe(TodoList);

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  deleteTodo: PropTypes.func.isRequired
};
