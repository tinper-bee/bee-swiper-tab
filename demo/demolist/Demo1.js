/**
*
* @title 这是标题
* @description 这是描述
*
*/


class Demo1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      checkedHonorList: [],
      currentIndex1: 0,
      swiperArray: []
    }
  };
 
  componentDidMount(){
    
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


    this.setState({swiperArray:swiperArray});
  }

  // 添加荣耀tag
  handleAddTag = () => {
    console.log("添加tag头部");
  }

  //选中某个item后的回调
  onSelectItem = (activeIndex,column,index) => {
    console.log("选中第"+activeIndex+"组第"+column+"列第"+(index+1)+"个");
  }

  //删除
  handleDelete = (index) => {
    console.log(`在第${index}组删除`);
    this.state.swiperArray[index].splice(1,1);
  }

  //添加
  handlerAdd = (index) => {
    console.log(`在第${index}组添加`);
    let tempAddItem = {
        "id":1,
        "award":2,
        "value":1,
        "logo":"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png",
        "name":"拼命三郎"
    };
    this.state.swiperArray[index].push(tempAddItem);

  }

  handleChangeTab = (activeIndex) => {
      console.log(activeIndex);
  }
  
  renderItem = (item) => {
    return {img:item.logo,label:item.name};
  }

  render(){
  	if(!this.state.swiperArray.length) return <span></span>
    return (
    	<div id="app">
        	<SwiperTab 
            showOper={true} 
            activeIndex={0}
            onChangeTab={this.handleChangeTab}
            columnItemNum={8} 
            title={["群组1","群组2","群组3"]} 
            onSelectItem={this.onSelectItem} 
            swiperArray={this.state.swiperArray} 
            addItem={this.handlerAdd} 
            deleteItem={this.handleDelete}
            render={item => this.renderItem(item) }  />
      	</div>
      );
  }


}
