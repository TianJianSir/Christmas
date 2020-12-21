import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class Main extends Component {
    constructor (props) {
      super(props)
      this.state = {
        users: [
          '田健',
          '沈均行',
          '潘毅',
          '穆萌',
          '胡浩',
          '顾威',
          '石娜娜',
          '黎军霞',
          '杨梦',
          '葛强强',
          '张宇询',
          '张舰',
          '陈若飞',
          '陈灏',
          '王猛',
          '吴佳豪',
          '郭森',
          '孙少辉',
          '张磊',
          '别业胜',
          '陈文超'
        ]
      }
    }
    start() {
      console.log('---');
    }

    addUser(){

    }

    render () {
      return (
        <div className="App">
          <header className="App-header">
            <p><Link to='/christmas/gift'>互赠礼物</Link></p>
            <p><Link to='/christmas/luckDraw'>抽奖</Link></p>
          </header>
        </div>
      );
    }
    
  }
  
  export default Main;