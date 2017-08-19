
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
    let title = [
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

    this.setState({title:title,swiperArray:swiperArray});
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
  
  render(){
  	if(!this.state.swiperArray.length) return <span></span>
    return (
    	<div id="app">
        	<SwiperTab columnItemNum={8} title={["群组1","群组2","群组3"]} onSelectItem={this.onSelectItem} swiperArray={this.state.swiperArray} singleDom={this.state.singleDom} itemNum={8} swiperKey={"cultureHonourTags"} addItem={this.handlerAdd} deleteItem={this.handleDelete} tabList={this.state.checkedHonorList} onSelectedItem={this.onSelectedItem}>
            </SwiperTab>
      	</div>
      );
  }


}
var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\n\n\nexport default class Demo1 extends Component{\n  constructor(props){\n    super(props);\n    this.state = {\n      checkedHonorList: [],\n      currentIndex1: 0,\n      swiperArray: []\n    }\n  };\n \n  componentDidMount(){\n    \n    let swiperArray = [\n        [\n          {\n              \"id\":1,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n              \"name\":\"拼命三郎\"\n          },\n          {\n              \"id\":2,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n              \"name\":\"行家里手\"\n          },\n          {\n              \"id\":3,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n              \"name\":\"勇于担当\"\n          },{\n              \"id\":1,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n              \"name\":\"拼命三郎\"\n          },\n          {\n              \"id\":2,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n              \"name\":\"行家里手\"\n          },\n          {\n              \"id\":3,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n              \"name\":\"勇于担当\"\n          },{\n              \"id\":1,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n              \"name\":\"拼命三郎\"\n          },\n          {\n              \"id\":2,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n              \"name\":\"行家里手\"\n          },\n          {\n              \"id\":3,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n              \"name\":\"勇于担当\"\n          },{\n              \"id\":1,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n              \"name\":\"拼命三郎\"\n          },\n          {\n              \"id\":2,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n              \"name\":\"行家里手\"\n          },\n          {\n              \"id\":3,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n              \"name\":\"勇于担当\"\n          },{\n              \"id\":1,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n              \"name\":\"拼命三郎\"\n          },\n          {\n              \"id\":2,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n              \"name\":\"行家里手\"\n          },\n          {\n              \"id\":3,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png\",\n              \"name\":\"勇于担当\"\n          }\n        ],\n        [\n          {\n              \"id\":1,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n              \"name\":\"拼命三郎\"\n          },\n          {\n              \"id\":2,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n              \"name\":\"行家里手\"\n          }\n        ],\n        [\n          {\n              \"id\":1,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n              \"name\":\"拼命三郎\"\n          },\n          {\n              \"id\":2,\n              \"award\":2,\n              \"value\":1,\n              \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png\",\n              \"name\":\"行家里手\"\n          }\n        ]\n      \n      ]\n    let title = [\n        {\n          \"id\":1,\n          \"name\":\"群组1\"\n        },{\n          \"id\":3,\n          \"name\":\"群组3\"\n        },{\n          \"id\":3,\n          \"name\":\"群组3\"\n        }  \n    ]\n\n    this.setState({title:title,swiperArray:swiperArray});\n  }\n\n  // 添加荣耀tag\n  handleAddTag = () => {\n    console.log(\"添加tag头部\");\n  }\n\n  //选中某个item后的回调\n  onSelectItem = (activeIndex,column,index) => {\n    console.log(\"选中第\"+activeIndex+\"组第\"+column+\"列第\"+(index+1)+\"个\");\n  }\n\n  //删除\n  handleDelete = (index) => {\n    console.log(`在第${index}组删除`);\n    this.state.swiperArray[index].splice(1,1);\n  }\n\n  //添加\n  handlerAdd = (index) => {\n    console.log(`在第${index}组添加`);\n    let tempAddItem = {\n        \"id\":1,\n        \"award\":2,\n        \"value\":1,\n        \"logo\":\"http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png\",\n        \"name\":\"拼命三郎\"\n    };\n    this.state.swiperArray[index].push(tempAddItem);\n\n  }\n  \n  render(){\n  \tif(!this.state.swiperArray.length) return <span></span>\n    return (\n    \t<div id=\"app\">\n        \t<SwiperTab columnItemNum={8} title={[\"群组1\",\"群组2\",\"群组3\"]} onSelectItem={this.onSelectItem} swiperArray={this.state.swiperArray} singleDom={this.state.singleDom} itemNum={8} swiperKey={\"cultureHonourTags\"} addItem={this.handlerAdd} deleteItem={this.handleDelete} tabList={this.state.checkedHonorList} onSelectedItem={this.onSelectedItem}>\n            </SwiperTab>\n      \t</div>\n      );\n  }\n\n\n}\n","desc":" 这是描述"}]


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
