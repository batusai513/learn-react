import React from "react";
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import Store from './parket-model';

const store = new Store();

export default function TodoAppParket() {
  return (
    <section className="todoapp">
      <TodoHeader onAddTodo={store.addTodo} />
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          store={store}
        />
      </section>
      <TodoFooter
        changeFilter={() => {}}
        selectedFilter={store.selectedFilter}
        leftTodos={store.todosCount}
      />
    </section>
  );
};
