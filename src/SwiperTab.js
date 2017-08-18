import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
//import HonorList from './SwiperList';
import './Swiper.js';

const propType = {
  // tab数据
  tabList: PropTypes.string.object,
  onSelectedItem: PropTypes.func.isRequired,
  swiperKey: PropTypes.string.isRequired,
  multiCheck: PropTypes.bool,  //item是支持单选还是多选 false:单选  true:多选
}

class SwiperTab extends Component{
	constructor(props, context) {
    super(props, context);
    this.state = {
      titleArray:[],
      titleActivity: 0,
      activeIndex: 0,
      swiperArray: []
    }
    
  }
  componentDidMount() {
    let swiperArray = [
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
          },
          {
              "id":3,
              "award":2,
              "value":1,
              "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png",
              "name":"勇于担当"
          },{
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
          },
          {
              "id":3,
              "award":2,
              "value":1,
              "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png",
              "name":"勇于担当"
          },{
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
          },
          {
              "id":3,
              "award":2,
              "value":1,
              "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png",
              "name":"勇于担当"
          },{
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
          },
          {
              "id":3,
              "award":2,
              "value":1,
              "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png",
              "name":"勇于担当"
          },{
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
          },
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
    let titleArray = [
        {
          "id":1,
          "name":"群组1"
        },{
          "id":3,
          "name":"群组3"
        },{
          "id":3,
          "name":"群组3"
        }  
    ]

    this.setState({titleArray:titleArray,swiperArray:swiperArray});
    let self = this;
    window.onload = function(){
      var swiperNested1 = new Swiper('.swiper-nested',{
        pagination: '.pagination-nested',
        paginationClickable: true,
      })

      var tabsSwiper = new Swiper('.swiper-outerside',{
        onSlideChangeStart: function(swiper){
          self.setState({activeIndex:swiper.activeIndex})
        }
      })
    }
  }

 renderTabTitle = () => {
   let titleArray = this.state.titleArray;
   let titleDomArray = [];
   let self = this;
   debugger;
   titleArray.map(function(item,index) {
    titleDomArray.push(<a href="#" data-id={item.id} data-active={self.state.activeIndex==index} className="tab-title">{item.name}</a>)
   })
   return <div className="tab-wrapper">{titleDomArray}</div>;
 }

 renderSwiper = () => {
   let swiperArray = this.state.swiperArray;
   let self = this;
   let swiperArrayDom = [];
   let swiperDom;
   swiperArray.map(function(item,index) {
    swiperDom = <div className="swiper-slide">
                        <div className="swiper-container swiper-nested">
                          <div className="pagination pagination-nested"></div>
                            {self.renderNestSwiper(item)}
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
    dom = <div className="swiper-slide">
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
      <div onClick={self.onSelectHonour}
        data-column={column}
        data-index={index}
        data-checked = {item.checked}
        key={index} >
       
        <div className="honor-detail">
          <img src={item.logo} alt="" />
          <h4>{item.name}</h4>
          <div className="icon-select"><i className="icon iconfont icon-selected"></i></div>
        </div>
      </div>
    )
  })
  
  let  operDom = (<div className="col-items">
                    <div className="honor-oper">
                        <div className="add-honor" onClick={this.addHonor}>+</div>
                        <div className="delete-honor" onTouchEnd={this.deleteHonor}>-</div>
                    </div>
                  </div>)
  if(Number(column) == totalColum-1) {
      columsArray.push(operDom)
  }
  console.log("columsArray");
  console.log(<div className="columns">{columsArray}</div>);
  return <div className="columns">{columsArray}</div>;
}

splitData = (data=[]) => {
  let splitNum = 8;
  let totalColum = Math.ceil(data.length/splitNum);
  let nestArray = [];
  let j = 0;
  
  for(var i=0;i<totalColum;i++) {
    nestArray.push(data.slice(j,j+splitNum));
    j = j+splitNum;
  }
  return {"nestArray":nestArray,"totalColum":totalColum};
}
  
 render() {
    
     
    return (
      <div>
        <div className="tabs-container"> 
          {this.renderTabTitle()}
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
}

SwiperTab.propType = propType

export default SwiperTab;