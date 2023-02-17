import React from 'react'
import PropTypes from 'prop-types'

const WithLogging = (WrappedComponent) => {
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  class NewComponent extends React.Component{
    componentDidMount(){
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount(){
      console.log(`Component ${name} will unmount`);
    }

    render(){
      return <WrappedComponent {...this.props}/>
    }
  }

  NewComponent.displayName = `WithLogging(${name})`;
	return NewComponent;
}

export default WithLogging
