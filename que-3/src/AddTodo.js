import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-end gap-2">
      <div className="w-100">
        <span>Add New:</span>
        <input
          type="text"
          placeholder="Add a new task"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
