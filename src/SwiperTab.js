import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import './Swiper.js';

const propType = {
  // tab数据
  tabList: PropTypes.string.object,
  onSelectedItem: PropTypes.func.isRequired,
  swiperKey: PropTypes.string.isRequired,
  title: PropTypes.array.isRequired,
  singleDom: PropTypes.node.isRequired,
  selectedItem: PropTypes.func,
  columnItemNum: PropTypes.number,
  showOper: PropTypes.bool,
  onChangeTab: PropTypes.func
}

class SwiperTab extends Component{
	constructor(props, context) {
    super(props, context);
    this.state = {
      title:this.props.title,
      titleActivity: 0,
      activeIndex: this.props.activeIndex || 0,
      swiperArray: this.props.swiperArray
    }
    
  }
  componentDidUpdate() {
    console.log("didUpdate");
    this.swiperNested[this.state.activeIndex].update();
  }
  componentDidMount() {
    
    let self = this;
    window.onload = function(){
      self.swiperNested = new Swiper('.swiper-nested',{
        pagination: '.pagination-nested',
        paginationClickable: true,
      })
      self.tabsSwiper = new Swiper('.swiper-outerside',{
        onSlideChangeStart: function(swiper){
          self.setState({activeIndex:swiper.activeIndex})
        }
      })
    }
  }

  HandleSelectItem = (column,index) => {
    let self =this;
    return function() {
      const { onSelectItem,multiCheck } = self.props;
  
      if(onSelectItem) {
        onSelectItem(self.state.activeIndex,column,index);
      }
    }
  }

 renderTabTitle = () => {
   let titleArray = this.props.title;
   let titleDomArray = [];
   let self = this;
   titleArray.map(function(item,index) {
    titleDomArray.push(<TabPane tab={item} key={index}></TabPane>)
   })
   return titleDomArray;
 }

 addItem = () => {
  const {addItem} = this.props;
  addItem(this.state.activeIndex);
}

deleteItem = () => {
  const {deleteItem} = this.props;
  console.log("deleteItem");
  deleteItem(this.state.activeIndex);
}


 renderSwiper = () => {
   let swiperArray = this.state.swiperArray;
   let self = this;
   let swiperArrayDom = [];
   let swiperDom;
   swiperArray.map(function(item,index) {
    swiperDom = <div key={index} className="swiper-slide">
                        <div className="swiper-container swiper-nested">
                            {self.renderNestSwiper(item)}
                            <div className="pagination pagination-nested"></div>
                        </div>
                    </div>;
    swiperArrayDom.push(swiperDom);
   })
   return <div className="swiper-wrapper">{swiperArrayDom}</div>
 }

 renderNestSwiper = (nestArray=[]) => {
  let splitData = this.splitData(nestArray);
  nestArray = splitData.nestArray;
  let totalColum = splitData.totalColum;
  let self = this;
  let dom ;
  let nestDom = [];
  nestArray.map(function(item,column) {
    dom = <div key={column} className="swiper-slide">
              {self.renderColumn(item,column,totalColum)}
          </div>
    nestDom.push(dom);
                   
  })
  return  <div className="swiper-wrapper">{nestDom}</div>;
 }



renderColumn = (data,column,totalColum) => {
  if(!data) return;
  let row = this.splitData().row;
  let columsArray = [];
  let self = this;

  //column  第几列
  //index  本列第几个
  data.map( (item,index) => {
    columsArray.push(
      <div onClick={self.HandleSelectItem(column,index)}
        data-column={column}
        key = {index}
        data-index={index}
        data-checked = {item.checked}
        key={index} >
        <div className="honor-detail">
          {item.logo && <img src={item.logo} alt="" />}
          {item.name && <h4>{item.name}</h4>}
        </div>
      </div>
    )
  })
  if(this.props.showOper) {
    let  operDom = (<div className="col-items">
        <div className="honor-oper">
            <div className="add-honor" onClick={this.addItem}>+</div>
            <div className="delete-honor" onClick={this.deleteItem}>-</div>
        </div>
      </div>)
    if(Number(column) == totalColum-1) {
      columsArray.push(operDom)
    }
  }
  
  return <div className="columns">{columsArray}</div>;
}

splitData = (data=[]) => {
  let splitNum = this.props.columnItemNum;
  let totalColum = Math.ceil(data.length/splitNum);
  let nestArray = [];
  let j = 0;
  
  for(var i=0;i<totalColum;i++) {
    nestArray.push(data.slice(j,j+splitNum));
    j = j+splitNum;
  }
  return {"nestArray":nestArray,"totalColum":totalColum};
}

toggleHonorTab = (id) => {

  this.setState({activeIndex:id});
  this.tabsSwiper.slideTo(id);
  if(this.props.onChangeTab) {
    this.props.onChangeTab(id);
  }
}

 render() {
    return (
      <div>
        <div className="tabs-container"> 
        <Tabs
        defaultActiveKey = "0"
        activeKey = {this.state.activeIndex.toString()}
        onChange={this.toggleHonorTab}
        destroyInactiveTabPane
        renderTabBar={()=><ScrollableInkTabBar />}
        renderTabContent={()=><TabContent />}
      >
          
          {this.renderTabTitle()}
        </Tabs>
         
        </div>
        <div className="swiper-container swiper-outerside">
          {this.renderSwiper()}
        </div>
      </div>
    )
  }
}

SwiperTab.defaultProps = {
  multiCheck: false,
  columnItemNum: 4,
  showOper: false,
  title: ["群组1","群组2","群组3"],
  swiperArray: [
    [
      {
          "id":3,
          "award":2,
          "value":1,
          "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png",
          "name":"勇于担当"
      }
    ],
    [
      {
          "id":1,
          "award":2,
          "value":1,
          "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png",
          "name":"拼命三郎"
      },
      {
          "id":2,
          "award":2,
          "value":1,
          "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png",
          "name":"行家里手"
      }
    ],
    [
      {
          "id":1,
          "award":2,
          "value":1,
          "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png",
          "name":"拼命三郎"
      },
      {
          "id":2,
          "award":2,
          "value":1,
          "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png",
          "name":"行家里手"
      }
    ]
  ]
}

SwiperTab.propType = propType

export default SwiperTab;