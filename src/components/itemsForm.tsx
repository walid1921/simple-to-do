import React, { useState } from "react";

const ItemsForm = ({addItem}) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) return;

    setDescription("");
    setQuantity(1);

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    addItem(newItem);

    console.log("submitted", newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemsForm;
