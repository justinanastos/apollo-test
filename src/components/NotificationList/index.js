import React, { Component } from 'react';
import Notification from '../Notification';

class NotificationList extends Component {
  render() {
    const { notifications } = this.props;
    return notifications.map((data, i) => <Notification data={data} />);
  }
}
export default NotificationList;
