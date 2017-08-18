/**
*
* @title 这是标题
* @description 这是描述
*
*/


export default class Demo1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      checkedHonorList: [],
      currentIndex1: 0,
    }
  };

  componentDidMount(){
    
    let res = [
          {
              "titleId":1,
              "titleName":"群组1",
              "item":[
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
              ]
          },{
              "titleId":2,
              "titleName":"群组2",
              "item":[
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
          },{
            "titleId":3,
            "titleName":"群组3",
            "item":[
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
          }
      ]
    this.setState({checkedHonorList:res});
  }


  //更新swiper样式
  // updateSwiperWidth = (checkedHonorList) => {
  //   let dom =  document.getElementById("app").getElementsByClassName('swiper-wrapper');
  //   if(!this.props.defaultFlag) {
  //     let fullWidth = document.getElementsByClassName("rc-tabs-bar")[0].offsetWidth;
  //     let splitNum = this.props.defaultFlag? 8 : 16;
  //     let row = Math.ceil(checkedHonorList.length/splitNum);
  //     if(dom.length > 0) {
  //       dom[0].style.width = 100 * Number(row) + "%";
  //     }
  //     this.setState({row:row});
  //   }
  // }
  
  // 添加荣耀tag
  handleAddTag = () => {
    console.log("添加tag头部");
  }

  //选中某个item后的回调
  onSelectedItem = (index1,index2) => {
    console.log("选中第"+index1+"组第"+index2+"个");
  }

  //删除
  handleDelete = (index1) => {
    console.log(`在第${index1}组删除`);
    this.state.checkedHonorList[index1].cultureHonourTags.splice(1,2);
    debugger;
    this.setState({checkedHonorList:this.state.checkedHonorList});
  }

  //添加
  handlerAdd = (index1) => {
    console.log(`在第${index1}组添加`);
    let tempAddItem = {
        "id":1,
        "award":2,
        "value":1,
        "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png",
        "name":"拼命三郎"
    };
    this.state.checkedHonorList[index1].cultureHonourTags.push(tempAddItem);
    this.setState({checkedHonorList:this.state.checkedHonorList});

  }
  
  render(){
  	if(!this.state.checkedHonorList.length) return <span></span>
    return (
    	<div id="app">
        	<SwiperTab itemNum={8} swiperKey={"cultureHonourTags"} addHonor={this.handlerAdd} deleteHonor={this.handleDelete} tabList={this.state.checkedHonorList} onSelectedItem={this.onSelectedItem}></SwiperTab>
      	</div>
      );
  }


}
