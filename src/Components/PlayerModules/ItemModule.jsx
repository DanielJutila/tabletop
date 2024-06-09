import React, { useState, useEffect } from "react";
import { getItems } from "../../stores/usersPB";
import DOMPurify from "dompurify";

const ItemModule = () => {
  const [safeHtml, setSanitizedItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await getItems();
      const dirtyResults = result.items;
      const sanitizedItems = dirtyResults.map((item) => {
        return {
          ...item,
          description: DOMPurify.sanitize(item.description),
        };
      });
      setSanitizedItems(sanitizedItems);
    };
    fetchItems();
  }, []);


  const [didSelect, setDidSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemSelect = (item) => {
    const selectedItem = safeHtml.find((i) => i.id === item);
    const sanitize = DOMPurify.sanitize(selectedItem.description);
    setSelectedItem({ ...selectedItem, description: sanitize });
    setDidSelect(true);
  }
  return (
    <div>
    {!didSelect ? (
    <div>
        <p><strong>Select an item</strong></p>
      {safeHtml.map((item) => (
        <div onClick={()=> itemSelect(item.id)} key={item.id} style={{border: '1px black solid'}}>
          <p style={{ fontSize: "15px", marginBottom: "1px" }}>{item.name}</p>
          <p
            dangerouslySetInnerHTML={{ __html: item.description }}
            className="subtle"
            style={{marginTop: '0px'}}
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
            style={{marginTop: '0px'}}
          />
      </div>
    )}
    </div>
  );
};

export default ItemModule;
