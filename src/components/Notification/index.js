import React from 'react';
import styles from './styles.css';

const Notification = ({ data }) => {
  const { name, text, createdAt, type } = data;
  const imageName = `img/${type}.svg`;
  return (
    <div className="notification">
      <div className="social-media">
        <img src={imageName} />
        <div className="line" />
      </div>
      <div className="notification-content">
        <div>
          <p>
            {' '}
            <strong>{name} </strong>
            {text}
          </p>
        </div>
        <div>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
