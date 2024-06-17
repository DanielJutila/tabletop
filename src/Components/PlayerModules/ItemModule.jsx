import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { getItems, updateItem } from "../../stores/usersPB";
import DOMPurify from "dompurify";
import useLongPress from "../Create/useLongPress";

const ItemModule = () => {
  const [showItem, setShowItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [items, setItems] = useState([]);
  const [charge, setCharge] = useState(null);

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

  }, [selectedItem]);

  const itemSelect = (item) => {
    setSelectedItem(item);
    setShowItem(true);
    setCharge(item.charges);
  };

  const lpHandlers = useLongPress();

  const goBack = () => {
    setShowItem(false);
    setSelectedItem(null);
    setSwipeDistance(0);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (showItem) {
        goBack();
      }
    },
    onSwiping: (eventData) => {
      if (showItem) {
        setSwipeDistance(eventData.deltaX);
        lpHandlers.onTouchMove();
      }
    },
    trackMouse: true,
    delta: 100,
  });

  const getTransformStyle = () => {
    if (swipeDistance > 0) {
      return {
        transform: `translateX(${swipeDistance}px)`,
        transition: "transform 0.3s ease-out",
      };
    }
    return {};
  };

  const changeColor = (color) => {
    const newCharge = {
      ...charge,
      used: color === "#D22B2B" ? charge.used - 1 : charge.used + 1,
    };
    setCharge(newCharge);
    updateItem(selectedItem.id, { charges: newCharge });
  };
  const changeQuantity = (amount) => {
    updateItem(selectedItem.id, { quantity: amount });
    }
  
  return (
    <div {...handlers} style={{ overflow: "hidden", position: "relative" }}>
      {!showItem ? (
        <div>
          {items.map((item) => (
            <div
              onClick={() => itemSelect(item)}
              key={item.id}
              style={{ borderTop: "1px solid black" }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginBottom: "1px",
                  marginTop: "5px",
                }}
              >
                {item.name}
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.description),
                }}
                className="subtle itemDescription"
              />
            </div>
          ))}
        </div>
      ) : (
        <div style={getTransformStyle()}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "10px",
              marginTop: "5px",
              textAlign: "center",
            }}
          >
            {selectedItem.name}
          </p>
          {selectedItem.charges !== undefined &&
            selectedItem.charges !== null && (
              <div>
                <div className="max-charges">
                  {Array.from({ length: charge.charges }).map((_, i) => (
                    <svg key={i} height="50" width="50">
                      <circle
                        cx="25"
                        cy="25"
                        r="20"
                        stroke="black"
                        strokeWidth="2"
                        fill={i < charge.used ? "#D22B2B" : "white"}
                        onClick={(event) => {
                          changeColor(event.target.getAttribute("fill"));
                        }}
                      />
                    </svg>
                  ))}
                </div>
                <p className="subtle chargeReset">Reset w/ {charge.reset}</p>
              </div>
            )}
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(selectedItem.description),
            }}
            className="itemDescriptionFull"
          />
        </div>
      )}
      {swipeDistance > 0 && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: swipeDistance,
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            textWrap: "nowrap",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "20px", color: "#888" }}>go back</span>
        </div>
      )}
    </div>
  );
};

export default ItemModule;
