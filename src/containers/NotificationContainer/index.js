import React, { Component } from 'react';
import NotificationList from '../../components/NotificationList';
import TabBar from '../../components/TabBar';
import data from '../../data.json';
import styles from './styles.css';

class NotificationContainer extends Component {
  state = {
    filter: 'All'
  };

  setFilter = filter => this.setState({ filter });

  getFilteredNotifications = () => {
    const filter = this.state.filter.toLowerCase();
    if (filter === 'all') {
      return data;
    }

    return data.filter(el => el.type === filter);
  };

  render() {
    return (
      <div className="notification-container">
        <div>
          <h1>NOTIFICATIONS</h1>
        </div>
        <TabBar handleClick={this.setFilter} filter={this.state.filter} />
        <NotificationList notifications={this.getFilteredNotifications()} />
      </div>
    );
  }
}

export default NotificationContainer;
