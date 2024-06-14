import React, { useState, useEffect } from "react";
import { getItems } from "../../stores/usersPB";
import DOMPurify from "dompurify";

  const ItemModule = ({ id }) => {
  const [items, setItems] = useState([]);
  const [showItem, setShowItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const toggleShowItem = () => {
    setShowItem(!showItem);
  };
  useEffect(() => {
    const fetchItems = async () => {
      const result = await getItems();
      const sanitizedItems = result.items.map((item) => ({
        ...item,
        description: DOMPurify.sanitize(item.description),
      }));
      setItems(sanitizedItems);
    };
    fetchItems();
  }, [id]);

  const itemSelect = (item) => {
    setSelectedItem(item);
    console.log(item);
  }
  return (
    <div>
      {!showItem ? (
        <div onClick={toggleShowItem}>
          {items.map((item) => (
            <div onClick={() => itemSelect(item)} key={item.id} style={{borderTop: '1px solid black'}}>
              <p style={{fontWeight: 'bold',fontSize: "15px", marginBottom: "1px", marginTop:'5px' }}>{item.name}</p>
              <p
                dangerouslySetInnerHTML={{ __html: item.description }}
                className="subtle itemDescription"
              />
              </div>
          ))}
        </div>
      ) : (
        <div>
          <p style={{fontWeight: 'bold',fontSize: "15px", marginBottom: "1px", marginTop:'5px' }}>{selectedItem.name}</p>
          {selectedItem.charges !== undefined && selectedItem.charges !== null && (
          <p>{selectedItem.charges.charges}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemModule;