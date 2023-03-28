import React from 'react';
import Bucket from './Bucket';
import './BucketList.css';

function BucketList(props) {
  const { buckets, onAddBucket, onDeleteBucket } = props;

  const handleAddBucket = () => {
    const name = prompt('Enter bucket name:');
    if (name) {
      onAddBucket(name);
    }
  };

  const handleDeleteBucket = (bucketId) => {
    if (window.confirm('Are you sure you want to delete this bucket?')) {
      onDeleteBucket(bucketId);
    }
  };

  return (
    <div className="bucket-list">
      <h2>Buckets</h2>
      <ul>
        {buckets.map((bucket) => (
          <Bucket
            key={bucket.id}
            bucket={bucket}
            onDelete={() => handleDeleteBucket(bucket.id)}
          />
        ))}
      </ul>
      <button className="add-bucket-btn" onClick={handleAddBucket}>
        Add Bucket
      </button>
    </div>
  );
}

export default BucketList;