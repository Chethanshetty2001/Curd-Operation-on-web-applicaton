import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList(props) {
  const { cards, onAddCard, onDeleteCard, onEditCard } = props;

  const handleAddCard = (bucketId) => {
    const name = prompt('Enter card name:');
    const link = prompt('Enter card link:');
    if (name && link) {
      onAddCard(bucketId, name, link);
    }
  };

  const handleDeleteCard = (bucketId, cardIndex) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      onDeleteCard(bucketId, cardIndex);
    }
  };

  const handleEditCard = (bucketId, cardIndex) => {
    const name = prompt('Enter new card name:');
    const link = prompt('Enter new card link:');
    if (name && link) {
      onEditCard(bucketId, cardIndex, name, link);
    }
  };

  return (
    <div className="card-list">
      <h2>Cards</h2>
      {cards.map((bucket) => (
        <div key={bucket.id}>
          <h3>{bucket.name}</h3>
          <ul>
            {bucket.cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                onDelete={() => handleDeleteCard(bucket.id, index)}
                onEdit={() => handleEditCard(bucket.id, index)}
              />
            ))}
          </ul>
          <button className="add-card-btn" onClick={() => handleAddCard(bucket.id)}>
            Add Card
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardList;