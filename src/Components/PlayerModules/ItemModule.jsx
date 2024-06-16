import React, {useEffect ,useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {getItems} from '../../stores/usersPB';
import DOMPurify from 'dompurify';
import useLongPress from '../Create/useLongPress'

const ItemModule = () => {
  const [showItem, setShowItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [items, setItems] = useState([]);
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
  }, []);
  const itemSelect = (item) => {
    setSelectedItem(item);
    setShowItem(true);
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
        transition: 'transform 0.3s ease-out',
      };
    }
    return {};
  };

  return (
    <div {...handlers} style={{ overflow: 'hidden', position: 'relative' }}>
      {!showItem ? (
        <div>
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
        <div style={getTransformStyle()}>
          <p style={{fontWeight: 'bold',fontSize: "15px", marginBottom: "1px", marginTop:'5px' }}>{selectedItem.name}</p>
          {selectedItem.charges !== undefined && selectedItem.charges !== null && (
            <p>{selectedItem.charges.charges}</p>
          )}
        </div>
      )}
      {swipeDistance > 0 && (
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: swipeDistance, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center',textWrap: 'nowrap', justifyContent: 'center' }}>
          <span style={{ fontSize: '20px', color: '#888' }}>go back</span>
        </div>
      )}
    </div>
  );
};

export default ItemModule;