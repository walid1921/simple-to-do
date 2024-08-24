import { useState } from "react";
import AllItems from "./components/allItems";
import ItemsForm from "./components/itemsForm";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

const App = () => {
  const [items, setItems] = useState(initialItems);
  const [editingItem, setEditingItem] = useState<number | null>(null); // New state for editing item ID
  const [newDescription, setNewDescription] = useState<string>(""); // New state for new description
  


  const addItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const deleteItem = (id) => {
    alert("Are you sure you want to delete this item?");
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const deleteAllItems = () => {
    alert("Are you sure you want to delete all items?");
    setItems([]);
  };

  const updateItemPacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // Function to handle updating an item's description
  const updateItemDescription = (id: number, newDescription: string) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );
    setEditingItem(null); // Clear editing mode after updating
  };

  // Function to start editing an item
  const startEditing = (id: number, description: string) => {
    setEditingItem(id);
    setNewDescription(description);
  };



  return (
    <>
      <ItemsForm addItem={addItem} />
      <AllItems
        items={items}
        deleteItem={deleteItem}
        deleteAllItems={deleteAllItems}
        updateItemPacked={updateItemPacked}
        startEditing={startEditing}
        editingItem={editingItem}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        updateItemDescription={updateItemDescription}
      />
    </>
  );
};

export default App;
