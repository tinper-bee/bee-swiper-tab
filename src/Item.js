import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';

function isRenderResultPlainObject(result) {
  return result && !React.isValidElement(result) &&
    Object.prototype.toString.call(result) === '[object Object]';
}

class Item extends React.Component{
  
  render() {
    const { render, item,checked, HandleSelectItem,index,column } = this.props;

    const renderResult = render(item);
    let renderedImg;
    let renderedEl;
    if (isRenderResultPlainObject(renderResult)) {
      renderedImg = renderResult.img;
      renderedEl = renderResult.label;
    }

    return (

      <div onClick={HandleSelectItem(column,index)}
        data-column={column}
        key = {index}
        data-index={index}
        data-checked = {checked}
        key={index} >
        <div className="honor-detail">
          {renderedImg && <img src={renderedImg} alt="" />}
          {renderedEl && <h4>{renderedEl}</h4>}
        </div>
      </div>

    );
  }
}

export default Item;
