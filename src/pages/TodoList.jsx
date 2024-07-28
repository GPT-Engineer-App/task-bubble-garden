import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TodoList = ({ todos, onDelete, onEdit, onToggleEdit }) => {
  return (
    <ul className="space-y-2 mb-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center space-x-2">
          {todo.isEditing ? (
            <Input
              value={todo.text}
              onChange={(e) => onEdit(todo.id, e.target.value)}
              className="flex-grow"
            />
          ) : (
            <span className="flex-grow">{todo.text}</span>
          )}
          <Button
            size="sm"
            variant="outline"
            onClick={() => onToggleEdit(todo.id)}
          >
            {todo.isEditing ? "Save" : "Edit"}
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;