import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Index = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <TodoList
            todos={todos}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onToggleEdit={toggleEdit}
          />
          <TodoForm onAdd={addTodo} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;