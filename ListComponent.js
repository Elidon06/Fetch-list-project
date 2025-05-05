
import React from 'react';

const ListComponent = ({ items, renderItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id || index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
