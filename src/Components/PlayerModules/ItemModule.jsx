import React, { useState, useEffect } from "react";
import { getItems } from "../../stores/usersPB";
import DOMPurify from "dompurify";

const ItemModule = ({ id }) => {
  const [items, setItems] = useState([]);
  const [didSelect, setDidSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await getItems();
      const sanitizedItems = result.items.map((item) => ({
        ...item,
        description: DOMPurify.sanitize(item.description),
      }));
      setItems(sanitizedItems);

      const savedItem = JSON.parse(localStorage.getItem(`selectedItem`));
      if (savedItem) {
        setSelectedItem(savedItem);
        setDidSelect(true);
      }
    };
    fetchItems();
  }, [id]);

  const itemSelect = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setSelectedItem(selectedItem);
    setDidSelect(true);
    localStorage.setItem(`selectedItem`, JSON.stringify(selectedItem));
  };

  return (
    <div>
      {!didSelect ? (
        <div>
          <p><strong>Select an item</strong></p>
          {items.map((item) => (
            <div onClick={() => itemSelect(item.id)} key={item.id} style={{border: '1px black solid'}}>
              <p style={{ fontSize: "15px", marginBottom: "1px" }}>{item.name}</p>
              <p
                dangerouslySetInnerHTML={{ __html: item.description }}
                className="subtle"
                style={{ marginTop: '0px' }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p style={{ fontSize: "15px", marginBottom: "1px" }}>{selectedItem.name}</p>
          <p
            dangerouslySetInnerHTML={{ __html: selectedItem.description }}
            className="subtle"
            style={{ marginTop: '0px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ItemModule;