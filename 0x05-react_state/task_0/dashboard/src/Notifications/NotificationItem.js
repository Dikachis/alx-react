import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite'

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selected_style = this.props.type === 'default' ? notificationItemStyles.default : notificationItemStyles.urgent;
  }
  render(){
    return (
      this.props.value ? 
      <li
      data-notification-type={this.props.type}
      onClick={()=> this.props.markAsRead(this.props.id)}
      className={css(this.selected_style, notificationItemStyles.li)}
      >{this.props.value}</li> 
      :
      <li
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      className={css(this.selected_style, notificationItemStyles.li)}
      ></li> 
    );
  }
}

const notificationItemStyles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: '#e1484c'
  },
  li: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      borderBottom: '1px solid black',
      padding: '10px 8px',
      margin: 0,
      width: '100%',
      fontSize: '20px'
    }
  }
})

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {console.log('empty func');},
	id: 0
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
