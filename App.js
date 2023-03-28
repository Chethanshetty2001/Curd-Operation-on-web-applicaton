import React, { useState } from 'react';
import CardList from './CardList';
import BucketList from './BucketList';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [buckets, setBuckets] = useState([]);

  const addCard = (bucketId, name, link) => {
    const newCard = { name, link };
    const newCards = cards.map((bucket) => {
      if (bucket.id === bucketId) {
        return {
          ...bucket,
          cards: [...bucket.cards, newCard],
        };
      }
      return bucket;
    });
    setCards(newCards);
  };

  const deleteCard = (bucketId, cardIndex) => {
    const newCards = cards.map((bucket) => {
      if (bucket.id === bucketId) {
        return {
          ...bucket,
          cards: [
            ...bucket.cards.slice(0, cardIndex),
            ...bucket.cards.slice(cardIndex + 1),
          ],
        };
      }
      return bucket;
    });
    setCards(newCards);
  };

  const editCard = (bucketId, cardIndex, name, link) => {
    const newCard = { name, link };
    const newCards = cards.map((bucket) => {
      if (bucket.id === bucketId) {
        return {
          ...bucket,
          cards: [
            ...bucket.cards.slice(0, cardIndex),
            newCard,
            ...bucket.cards.slice(cardIndex + 1),
          ],
        };
      }
      return bucket;
    });
    setCards(newCards);
  };

  const addBucket = (name) => {
    const newBucket = { id: buckets.length, name, cards: [] };
    setBuckets([...buckets, newBucket]);
    setCards([...cards, newBucket]);
  };

  const deleteBucket = (bucketId) => {
    const newBuckets = buckets.filter((bucket) => bucket.id !== bucketId);
    setBuckets(newBuckets);
    setCards(cards.filter((bucket) => bucket.id !== bucketId));
  };

  return (
    <div className="app">
      <BucketList
        buckets={buckets}
        onAddBucket={addBucket}
        onDeleteBucket={deleteBucket}
      />
      <CardList
        cards={cards}
        onAddCard={addCard}
        onDeleteCard={deleteCard}
        onEditCard={editCard}
      />
    </div>
  );
}

export default App;