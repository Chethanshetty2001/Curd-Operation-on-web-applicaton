import React from 'react';

function Card(props) {
  const { card, onDelete, onEdit } = props;

  return (
    <li className="card">
      <a href={card.link} target="_blank" rel="noopener noreferrer">
        {card.name}
      </a>
      <div className="card-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

export default Card;
