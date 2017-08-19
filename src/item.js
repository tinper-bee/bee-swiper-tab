import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const propType = {
  
}

class item extends Component{
	constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
    
  }
  componentDidMount() {
    
  }


 render() {
    return (
        <div>
            {this.props.children}
        </div>
    )
  }
}


export default item;