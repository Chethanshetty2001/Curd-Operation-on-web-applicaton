import React from 'react';

function Bucket(props) {
  const { bucket, onDelete } = props;

  return (
    <li className="bucket">
      <div className="bucket-details">
        <h3 className="bucket-name">{bucket.name}</h3>
        <p className="bucket-description">{bucket.description}</p>
      </div>
      <button className="delete-bucket-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Bucket;