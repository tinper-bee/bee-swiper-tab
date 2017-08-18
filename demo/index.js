
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SwiperTab from '../src';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


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
var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\n\n\nexport default class Demo1 extends Component{\n  constructor(props){\n    super(props);\n    this.state = {\n      checkedHonorList: [],\n      currentIndex1: 0,\n    }\n  };\n\n  componentDidMount(){\n    \n    let res = [\n          {\n              \"titleId\":1,\n              \"titleName\":\"群组1\",\n              \"item\":[\n                  {\n                      \"id\":1,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n                      \"name\":\"拼命三郎\"\n                  },\n                  {\n                      \"id\":2,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n                      \"name\":\"行家里手\"\n                  },\n                  {\n                      \"id\":3,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n                      \"name\":\"勇于担当\"\n                  },{\n                      \"id\":1,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n                      \"name\":\"拼命三郎\"\n                  },\n                  {\n                      \"id\":2,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n                      \"name\":\"行家里手\"\n                  },\n                  {\n                      \"id\":3,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n                      \"name\":\"勇于担当\"\n                  },{\n                      \"id\":1,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n                      \"name\":\"拼命三郎\"\n                  },\n                  {\n                      \"id\":2,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n                      \"name\":\"行家里手\"\n                  },\n                  {\n                      \"id\":3,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n                      \"name\":\"勇于担当\"\n                  },{\n                      \"id\":1,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n                      \"name\":\"拼命三郎\"\n                  },\n                  {\n                      \"id\":2,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n                      \"name\":\"行家里手\"\n                  },\n                  {\n                      \"id\":3,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n                      \"name\":\"勇于担当\"\n                  },{\n                      \"id\":1,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n                      \"name\":\"拼命三郎\"\n                  },\n                  {\n                      \"id\":2,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n                      \"name\":\"行家里手\"\n                  },\n                  {\n                      \"id\":3,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n                      \"name\":\"勇于担当\"\n                  }\n              ]\n          },{\n              \"titleId\":2,\n              \"titleName\":\"群组2\",\n              \"item\":[\n                  {\n                      \"id\":1,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n                      \"name\":\"拼命三郎\"\n                  },\n                  {\n                      \"id\":2,\n                      \"award\":2,\n                      \"value\":1,\n                      \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n                      \"name\":\"行家里手\"\n                  }\n              ]\n          },{\n            \"titleId\":3,\n            \"titleName\":\"群组3\",\n            \"item\":[\n                {\n                    \"id\":1,\n                    \"award\":2,\n                    \"value\":1,\n                    \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n                    \"name\":\"拼命三郎\"\n                },\n                {\n                    \"id\":2,\n                    \"award\":2,\n                    \"value\":1,\n                    \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n                    \"name\":\"行家里手\"\n                }\n            ]\n          }\n      ]\n    this.setState({checkedHonorList:res});\n  }\n\n\n  //更新swiper样式\n  // updateSwiperWidth = (checkedHonorList) => {\n  //   let dom =  document.getElementById(\"app\").getElementsByClassName('swiper-wrapper');\n  //   if(!this.props.defaultFlag) {\n  //     let fullWidth = document.getElementsByClassName(\"rc-tabs-bar\")[0].offsetWidth;\n  //     let splitNum = this.props.defaultFlag? 8 : 16;\n  //     let row = Math.ceil(checkedHonorList.length/splitNum);\n  //     if(dom.length > 0) {\n  //       dom[0].style.width = 100 * Number(row) + \"%\";\n  //     }\n  //     this.setState({row:row});\n  //   }\n  // }\n  \n  // 添加荣耀tag\n  handleAddTag = () => {\n    console.log(\"添加tag头部\");\n  }\n\n  //选中某个item后的回调\n  onSelectedItem = (index1,index2) => {\n    console.log(\"选中第\"+index1+\"组第\"+index2+\"个\");\n  }\n\n  //删除\n  handleDelete = (index1) => {\n    console.log(`在第${index1}组删除`);\n    this.state.checkedHonorList[index1].cultureHonourTags.splice(1,2);\n    debugger;\n    this.setState({checkedHonorList:this.state.checkedHonorList});\n  }\n\n  //添加\n  handlerAdd = (index1) => {\n    console.log(`在第${index1}组添加`);\n    let tempAddItem = {\n        \"id\":1,\n        \"award\":2,\n        \"value\":1,\n        \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n        \"name\":\"拼命三郎\"\n    };\n    this.state.checkedHonorList[index1].cultureHonourTags.push(tempAddItem);\n    this.setState({checkedHonorList:this.state.checkedHonorList});\n\n  }\n  \n  render(){\n  \tif(!this.state.checkedHonorList.length) return <span></span>\n    return (\n    \t<div id=\"app\">\n        \t<SwiperTab itemNum={8} swiperKey={\"cultureHonourTags\"} addHonor={this.handlerAdd} deleteHonor={this.handleDelete} tabList={this.state.checkedHonorList} onSelectedItem={this.onSelectedItem}></SwiperTab>\n      \t</div>\n      );\n  }\n\n\n}\n","desc":" 这是描述"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
