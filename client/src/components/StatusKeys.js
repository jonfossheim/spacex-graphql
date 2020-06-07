import React from 'react';

const StatusKeys = () => {
  return (
    <div>
      <p className={'statuskey'}>
        <span className={'statuskey statuskey--success'} /> = Success.
      </p>
      <p className={'statuskey'}>
        <span className={'statuskey statuskey--error'} /> = Failure.
      </p>
    </div>
  );
};

export default StatusKeys;
