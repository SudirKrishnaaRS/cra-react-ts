import React from "react";
import { Todo } from "../todo.type";

interface TodoListProps {
  items: Todo[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
