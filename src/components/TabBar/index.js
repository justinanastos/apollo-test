import React from 'react';
import styles from './styles.css';

const TabBar = ({ handleClick, filter }) => {
  const options = ['All', 'Github', 'Facebook', 'Twitter'];

  return (
    <div className="container">
      {options.map(option => {
        const className = option === filter ? 'option-selected' : 'option';
        return (
          <div onClick={() => handleClick(option)} className={className}>
            <p>{option}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
