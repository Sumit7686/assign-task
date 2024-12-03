import React, { useState } from "react";
import { Button, FormCheck, FormSelect, Table } from "react-bootstrap";

const TodoList = ({ todos, onToggle, onDelete }) => {
  const [filterValue, setFilterValue] = useState("");

  // Function to handle filtering
  const filteredTodos = todos.filter((todo) => {
    if (filterValue === "") return true;

    const isCompleted = filterValue === "true";

    return todo.completed === isCompleted;
  });

  return (
    <div className="border mt-3 p-3">
      <div className="d-flex justify-content-between mt-3">
        <h5>List Of Todo</h5>
        <div>
          <label>Status:</label>
          <FormSelect
            size="sm"
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="">All</option>
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </FormSelect>
        </div>
      </div>

      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th>SR NO.</th>
            <th>Text</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.text}</td>
                <td>
                  <div className="d-flex gap-2">
                    <FormCheck
                      type="switch"
                      id={`custom-switch-${todo.id}`}
                      checked={todo?.completed}
                      onChange={() => onToggle(todo.id)}
                    />
                  </div>
                </td>
                <td className="">
                  <Button variant="danger" onClick={() => onDelete(todo.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No Item Found!
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
