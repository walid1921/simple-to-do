import { useState } from "react";

type Item = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

type AllItemsProps = {
  items: Item[];
  deleteItem: (id: number) => void;
  deleteAllItems: () => void;
  updateItemPacked: (id: number) => void;
  startEditing: (id: number, description: string) => void;
  editingItem: number | null;
  newDescription: string;
  setNewDescription: (desc: string) => void;
  updateItemDescription: (id: number, newDescription: string) => void;
};

const AllItems = ({
  items,
  deleteItem,
  deleteAllItems,
  updateItemPacked,
  startEditing,
  editingItem,
  newDescription,
  setNewDescription,
  updateItemDescription,
}: AllItemsProps) => {
    
  const [sortBy, setSortBy] = useState("all");

  let sortedItems;

  if (sortBy === "all") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
  }

  return (
    <div>
      <h2>All Items</h2>
      <ul>
        {sortedItems?.map((item) => (
          <li key={item.id}>
            {item.quantity} -{" "}
            {editingItem === item.id ? (
              <>
                {/* Edit mode: Show input for description */}
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <button
                  onClick={() => updateItemDescription(item.id, newDescription)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {/* Normal mode: Show description and edit button */}
                {item.description} -{" "}
                <button onClick={() => startEditing(item.id, item.description)}>
                  Edit
                </button>
              </>
            )}
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => updateItemPacked(item.id)}
            />
            {item.packed ? <span>Packed</span> : <span>Not Packed</span>}
            <button className="bg-red-500" onClick={() => deleteItem(item.id)}>
              -
            </button>
          </li>
        ))}
      </ul>
      {items.length > 0 ? (
        <button onClick={deleteAllItems}>Delete All Items</button>
      ) : null}
 
      {items.length > 0 ? (
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="all">All</option>
          <option value="description">Description</option>
          <option value="packed">Packed</option>
          <option value="quantity">Quantity</option>
        </select>
      ) : null}
    </div>
  );
};

export default AllItems;
