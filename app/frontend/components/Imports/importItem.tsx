import React from 'react';

interface ImportItemProps {
  id: string;
  name: string;
  description: string;
  onSelect: (id: string) => void;
}

const ImportItem: React.FC<ImportItemProps> = ({ id, name, description, onSelect }) => {
  return (
    <div onClick={() => onSelect(id)} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', cursor: 'pointer' }}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ImportItem;