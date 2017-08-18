import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper';
//import Swiper from './swiper';

class HonorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row:0,
      activekey:0,  //当前swiper到第几轮
      honorList: this.props.honorList
    }
  }
  
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps");
    if(nextProps.activityTabKey != this.state.activityTabKey) {
      this.setState({activityTabKey:nextProps.activityTabKey});
    }
    
    let splitNum = this.props.itemNum;
    let row = Math.ceil(this.state.honorList.length/splitNum);
    this.setState({row:row});
    this.updateSwiperWidth(row);
    if(this.swiper) {
      this.swiper.update();
    }
  }

  componentDidUpdate(nextProps,nextState) {
    
    if(this.swiper) {
      this.swiper.update();
    }
    this.updateSwiperWidth();
  }

  componentDidMount () {
    if(this.swiper) {
      this.swiper.update();
    }
    let splitNum = this.props.itemNum;
    let row = Math.ceil(this.state.honorList.length/splitNum);
    this.updateSwiperWidth(row);
    console.log("didMount");
  }

  updateSwiperWidth = (row) => {
    //let dom =  document.getElementsByClassName('swiper-wrapper');
    let fullWidth = document.getElementsByClassName("swiper-tab")[0].offsetWidth;
    
    if(this.swiper) {
      this.swiper.wrapper[0].style.width = 100 * Number(row || this.state.row) + "%";
      //dom[0].style.width = 100 * Number(row || this.state.row) + "%";
    }
  }

  getTargetDom = (e) => {
    let targetDom;

    if(e.className == "col-items") {
      return e;
    }

    targetDom = e.parentElement;

    if(targetDom.className !== "col-items") {
      targetDom = this.getTargetDom(targetDom);
    }
    
    return targetDom;
  }

  onSelectHonour = (e) => {
    const { selectedItem,multiCheck } = this.props;

    let selectedDom = this.getTargetDom(e.target);

    let index1 = selectedDom.getAttribute("data-index1");
    let index2 = selectedDom.getAttribute("data-index2");
    
    //算出在本组下第几个（轮合并）
    index2 = Number(index2) + 8* Number(this.state.activekey);

    if(selectedItem) {
      selectedItem(index1,index2);
    }
  }

  splitData = () => {
    let honorList = this.state.honorList;
    //默认的荣耀一页显示八个，选中的荣耀一页显示12个
    let splitNum = this.props.itemNum;
    //let splitNum = 8;
    let row = Math.ceil(honorList.length/splitNum);
    let NewHonorList = {};
    let j = 0;
    
    for(var i=0;i<row;i++) {
      NewHonorList[i] = honorList.slice(j,j+splitNum);
      j = j+splitNum;
    }

    return {"NewHonorList":NewHonorList,"row":row};

  }

  getSwiperListView = () => {
    let NewHonorList = this.splitData().NewHonorList;
    let columsArray = [];
    let self = this;

    for(var item in NewHonorList) {
      let contentList = self.getListView(NewHonorList[item],item);
      columsArray.push(
         <div className="colums">
           {contentList}
         </div>
      )
    }

    return columsArray;
  }

  addHonor = () => {
    const {addHonor} = this.props;
    addHonor(this.props.index1);
  }

  deleteHonor = () => {
    const {deleteHonor} = this.props;
    deleteHonor(this.props.index1);
  }

  getListView = (honorList,index) => {
    if(!honorList) return;
    let row = this.splitData().row;
    let columsArray = [];
    let self = this;

    //index1  第几轮
    //index2  本轮第几个
    honorList.map( (item,index) => {
      columsArray.push(
        <div onClick={self.onSelectHonour}
          data-index1={self.props.index1}
          data-index2={index}
          data-checked = {item.checked}
          key={index}
          className={item.checked?"col-items is-select":"col-items"}
          data-id={item.id}
          data-message={item.message}
          data-val={item.value}
          data-award={item.award} >
         
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
    if(Number(index) == row-1 && !this.props.defaultFlag) {
        columsArray.push(operDom)
    }
    
    return columsArray;
  }

  changeState = (e) => {
    let swiper = e;
    const {triggerSwiper,swiperContentList,uid} = this.props;
    if(triggerSwiper) {
      triggerSwiper(swiperContentList[swiper.activeIndex].cultureDeptId, uid);
    }
  }

  render(){
      const { swiperEnd } = this.props;
      let self = this;
      const params = {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          onTransitionEnd: function(swiper) {
            console.log("onTransitionEnd");
            self.setState({activekey:swiper.activeIndex})

            
            if(self.swiper.isBeginning && self.state.activekey == 0) {
              swiperEnd(-1);
            }
            self.setState({activekey:swiper.activeIndex})
          },
         
          update: (updateTranslate) => {
            console.log(updateTranslate);
          },
          onInit: (swiper) => {
            this.swiper = swiper
           
          }
      }
    
      return (
        <Swiper {...params}>
            { this.getSwiperListView() }
        </Swiper>
      )
  }
}

HonorList.propTypes = {
  title: PropTypes.element,
  honorList: PropTypes.array.isRequired,
  selectedItem: PropTypes.func.isRequired,
  itemNum: PropTypes.number,    //每列定义多少item
  checked: PropTypes.bool       //item是否是选中状态
}

HonorList.defaultProps = {
  itemNum: 1,
  
}


export default HonorList;
