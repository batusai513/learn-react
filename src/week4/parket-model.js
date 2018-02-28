import model from "parket";

const Todo = model("todo", {
  initial: () => ({
    isDone: false,
    text: ""
  }),
  actions: state => ({
    setText(text) {
      state.text = text;
    },
    toggleIsDone() {
      state.isDone = !state.isDone;
    }
  })
});

export default model("Todos", {
  initial: () => ({
    todos: [],
    selectedFilter: "all"
  }),
  actions: state => ({
    addTodo(text) {
      state.todos.push(Todo({ text }));
    },
    removeTodo(todo) {
      return state.todos.splice(state.todos.indexOf(todo) >>> 0, 1);
    },
    toggleTodo(idx) {
      state.todos[idx].toggleIsDone();
    }
  }),
  views: state => ({
    todosCount() {
      return state.todos.length;
    }
  })
});
