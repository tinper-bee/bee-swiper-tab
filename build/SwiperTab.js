'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _TabContent = require('rc-tabs/lib/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _ScrollableInkTabBar = require('rc-tabs/lib/ScrollableInkTabBar');

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

require('./Swiper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
//import HonorList from './SwiperList';


var propType = {
  // tab数据
  tabList: _propTypes2["default"].string.object,
  onSelectedItem: _propTypes2["default"].func.isRequired,
  swiperKey: _propTypes2["default"].string.isRequired,
  title: _propTypes2["default"].array.isRequired,
  singleDom: _propTypes2["default"].node.isRequired,
  selectedItem: _propTypes2["default"].func,
  columnItemNum: _propTypes2["default"].number,
  showOper: _propTypes2["default"].bool,
  onChangeTab: _propTypes2["default"].func
};

var SwiperTab = function (_Component) {
  _inherits(SwiperTab, _Component);

  function SwiperTab(props, context) {
    _classCallCheck(this, SwiperTab);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.HandleSelectItem = function (column, index) {
      var self = _this;
      return function () {
        var _self$props = self.props,
            onSelectItem = _self$props.onSelectItem,
            multiCheck = _self$props.multiCheck;


        if (onSelectItem) {
          onSelectItem(self.state.activeIndex, column, index);
        }
      };
    };

    _this.renderTabTitle = function () {
      var titleArray = _this.props.title;
      var titleDomArray = [];
      var self = _this;
      titleArray.map(function (item, index) {
        titleDomArray.push(_react2["default"].createElement(_rcTabs.TabPane, { tab: item, key: index }));
      });
      return titleDomArray;
    };

    _this.addItem = function () {
      var addItem = _this.props.addItem;

      addItem(_this.state.activeIndex);
    };

    _this.deleteItem = function () {
      var deleteItem = _this.props.deleteItem;

      console.log("deleteItem");
      deleteItem(_this.state.activeIndex);
    };

    _this.renderSwiper = function () {
      var swiperArray = _this.state.swiperArray;
      var self = _this;
      var swiperArrayDom = [];
      var swiperDom = void 0;
      swiperArray.map(function (item, index) {
        swiperDom = _react2["default"].createElement(
          'div',
          { key: index, className: 'swiper-slide' },
          _react2["default"].createElement(
            'div',
            { className: 'swiper-container swiper-nested' },
            self.renderNestSwiper(item),
            _react2["default"].createElement('div', { className: 'pagination pagination-nested' })
          )
        );
        swiperArrayDom.push(swiperDom);
      });
      return _react2["default"].createElement(
        'div',
        { className: 'swiper-wrapper' },
        swiperArrayDom
      );
    };

    _this.renderNestSwiper = function () {
      var nestArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var splitData = _this.splitData(nestArray);
      nestArray = splitData.nestArray;
      var totalColum = splitData.totalColum;
      var self = _this;
      var dom = void 0;
      var nestDom = [];
      nestArray.map(function (item, column) {
        dom = _react2["default"].createElement(
          'div',
          { key: column, className: 'swiper-slide' },
          self.renderColumn(item, column, totalColum)
        );
        nestDom.push(dom);
      });
      return _react2["default"].createElement(
        'div',
        { className: 'swiper-wrapper' },
        nestDom
      );
    };

    _this.renderColumn = function (data, column, totalColum) {
      if (!data) return;
      var row = _this.splitData().row;
      var columsArray = [];
      var self = _this;

      //column  第几列
      //index  本列第几个
      data.map(function (item, index) {
        columsArray.push(_react2["default"].createElement(
          'div',
          _defineProperty({ onClick: self.HandleSelectItem(column, index),
            'data-column': column,
            key: index,
            'data-index': index,
            'data-checked': item.checked
          }, 'key', index),
          _react2["default"].createElement(
            'div',
            { className: 'honor-detail' },
            item.logo && _react2["default"].createElement('img', { src: item.logo, alt: '' }),
            item.name && _react2["default"].createElement(
              'h4',
              null,
              item.name
            )
          )
        ));
      });
      if (_this.props.showOper) {
        var operDom = _react2["default"].createElement(
          'div',
          { className: 'col-items' },
          _react2["default"].createElement(
            'div',
            { className: 'honor-oper' },
            _react2["default"].createElement(
              'div',
              { className: 'add-honor', onClick: _this.addItem },
              '+'
            ),
            _react2["default"].createElement(
              'div',
              { className: 'delete-honor', onClick: _this.deleteItem },
              '-'
            )
          )
        );
        if (Number(column) == totalColum - 1) {
          columsArray.push(operDom);
        }
      }

      return _react2["default"].createElement(
        'div',
        { className: 'columns' },
        columsArray
      );
    };

    _this.splitData = function () {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var splitNum = _this.props.columnItemNum;
      var totalColum = Math.ceil(data.length / splitNum);
      var nestArray = [];
      var j = 0;

      for (var i = 0; i < totalColum; i++) {
        nestArray.push(data.slice(j, j + splitNum));
        j = j + splitNum;
      }
      return { "nestArray": nestArray, "totalColum": totalColum };
    };

    _this.toggleHonorTab = function (id) {

      _this.setState({ activeIndex: id });
      _this.tabsSwiper.slideTo(id);
      if (_this.props.onChangeTab) {
        _this.props.onChangeTab(id);
      }
    };

    _this.state = {
      title: _this.props.title,
      titleActivity: 0,
      activeIndex: _this.props.activeIndex || 0,
      swiperArray: _this.props.swiperArray
    };

    return _this;
  }

  SwiperTab.prototype.componentDidUpdate = function componentDidUpdate() {
    console.log("didUpdate");
    this.swiperNested[this.state.activeIndex].update();
  };

  SwiperTab.prototype.componentDidMount = function componentDidMount() {

    var self = this;
    window.onload = function () {
      self.swiperNested = new Swiper('.swiper-nested', {
        pagination: '.pagination-nested',
        paginationClickable: true
      });
      self.tabsSwiper = new Swiper('.swiper-outerside', {
        onSlideChangeStart: function onSlideChangeStart(swiper) {
          self.setState({ activeIndex: swiper.activeIndex });
        }
      });
    };
  };

  SwiperTab.prototype.render = function render() {
    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(
        'div',
        { className: 'tabs-container' },
        _react2["default"].createElement(
          _rcTabs2["default"],
          {
            defaultActiveKey: '0',
            activeKey: this.state.activeIndex.toString(),
            onChange: this.toggleHonorTab,
            destroyInactiveTabPane: true,
            renderTabBar: function renderTabBar() {
              return _react2["default"].createElement(_ScrollableInkTabBar2["default"], null);
            },
            renderTabContent: function renderTabContent() {
              return _react2["default"].createElement(_TabContent2["default"], null);
            }
          },
          this.renderTabTitle()
        )
      ),
      _react2["default"].createElement(
        'div',
        { className: 'swiper-container swiper-outerside' },
        this.renderSwiper()
      )
    );
  };

  return SwiperTab;
}(_react.Component);

SwiperTab.defaultProps = {
  multiCheck: false,
  columnItemNum: 4,
  showOper: false,
  title: ["群组1", "群组2", "群组3"],
  swiperArray: [[{
    "id": 3,
    "award": 2,
    "value": 1,
    "logo": "http://hongbao-test.app.yyuap.com/static/img/honor-icon/3.png",
    "name": "勇于担当"
  }], [{
    "id": 1,
    "award": 2,
    "value": 1,
    "logo": "http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png",
    "name": "拼命三郎"
  }, {
    "id": 2,
    "award": 2,
    "value": 1,
    "logo": "http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png",
    "name": "行家里手"
  }], [{
    "id": 1,
    "award": 2,
    "value": 1,
    "logo": "http://hongbao-test.app.yyuap.com/static/img/honor-icon/1.png",
    "name": "拼命三郎"
  }, {
    "id": 2,
    "award": 2,
    "value": 1,
    "logo": "http://hongbao-test.app.yyuap.com/static/img/honor-icon/2.png",
    "name": "行家里手"
  }]]
};

SwiperTab.propType = propType;

exports["default"] = SwiperTab;
module.exports = exports['default'];