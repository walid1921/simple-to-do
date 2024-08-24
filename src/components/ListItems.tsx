import { useState } from "react";
import Item from "./item";

type InitialItems = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};
type ListItemsProps = {
  initialItems: InitialItems[];
  deleteItem: (id: number) => void;
  deleteAllItems: () => void;
  updateItem: (id: number) => void;
};

const ListItems = ({
  initialItems,
  deleteItem,
  updateItem,
  deleteAllItems,
}: ListItemsProps) => {
  const [sortBy, setSortBy] = useState("all");

  let sortedItems;

  if (sortBy === "all") {
    sortedItems = initialItems;
  }

  if (sortBy === "description")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </ul>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="all">All</option>
        <option value="description">description</option>
        <option value="packed">packed</option>
      </select>

      <button onClick={deleteAllItems}>Delete All Items</button>
    </div>
  );
};

export default ListItems;
