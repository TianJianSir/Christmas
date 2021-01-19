import React, { Component } from 'react';
import Date from '../../components/Date'

import './style.scss';

var radius = 120;
var dtr = Math.PI/180;
var d=300;
var mcList = [];
var active = false;
var lasta = 1;
var lastb = 1;
var distr = true;
var tspeed=1;
var size=250;

var mouseX=0;
var mouseY=0;

var howElliptical=1;
var ca = 1
var sa = 0
var cb = 0.9995675924694589
var sb = -0.029404558912006003
var cc = 1
var sc = 0
var per = 0.7749362559850052

var aA=null;
var oDiv=null;

function rotate()
{
    var i=0;
    var oTag=null;
    
    oDiv=document.getElementById('webxiu-tags');
    if(!oDiv){
        return false;
    }
    console.log('webxiu-tags', oDiv);
    
    aA=oDiv.getElementsByTagName('a');
    
    for(i=0;i<aA.length;i++)
    {
        oTag={};
        
        oTag.offsetWidth=aA[i].offsetWidth;
        oTag.offsetHeight=aA[i].offsetHeight;
        
        mcList.push(oTag);
    }
    
    sineCosine( 0,0,0 );
    
    positionAll();
    
    setInterval(update, 30);
};

function update()
{
    var a;
    var b;
    
    if(active)
    {
        a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
        b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
    }
    else
    {
        a = lasta * 1;
        b = lastb * 1;
    }
    
    lasta=a;
    lastb=b;
    
    if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
    {
        return;
    }
    
    var c=0;
    sineCosine(a,b,c);
    for(var j=0;j<mcList.length;j++)
    {
        var rx1=mcList[j].cx;
        var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
        var rz1=mcList[j].cy*sa+mcList[j].cz*ca;
        
        var rx2=rx1*cb+rz1*sb;
        var ry2=ry1;
        var rz2=rx1*(-sb)+rz1*cb;
        
        var rx3=rx2*cc+ry2*(-sc);
        var ry3=rx2*sc+ry2*cc;
        var rz3=rz2;
        
        mcList[j].cx=rx3;
        mcList[j].cy=ry3;
        mcList[j].cz=rz3;
        
        per=d/(d+rz3);
        
        mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
        mcList[j].y=ry3*per;
        mcList[j].scale=per;
        mcList[j].alpha=per;
        
        mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
    }
    
    doPosition();
    depthSort();
}

function depthSort()
{
    var i=0;
    var aTmp=[];
    
    for(i=0;i<aA.length;i++)
    {
        aTmp.push(aA[i]);
    }
    
    aTmp.sort
    (
        function (vItem1, vItem2)
        {
            if(vItem1.cz>vItem2.cz)
            {
                return -1;
            }
            else if(vItem1.cz<vItem2.cz)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    );
    
    for(i=0;i<aTmp.length;i++)
    {
        aTmp[i].style.zIndex=i;
    }
}

function positionAll()
{
    var phi=0;
    var theta=0;
    var max=mcList.length;
    var i=0;
    
    var aTmp=[];
    var oFragment=document.createDocumentFragment();
    
    for(i=0;i<aA.length;i++)
    {
        aTmp.push(aA[i]);
    }
    
    aTmp.sort
    (
        function ()
        {
            return Math.random()<0.5?1:-1;
        }
    );
    
    for(i=0;i<aTmp.length;i++)
    {
        oFragment.appendChild(aTmp[i]);
    }
    
    oDiv.appendChild(oFragment);
    
    for( var i=1; i<max+1; i++){
        if( distr )
        {
            phi = Math.acos(-1+(2*i-1)/max);
            theta = Math.sqrt(max*Math.PI)*phi;
        }
        else
        {
            phi = Math.random()*(Math.PI);
            theta = Math.random()*(2*Math.PI);
        }
        mcList[i-1].cx = radius * Math.cos(theta)*Math.sin(phi);
        mcList[i-1].cy = radius * Math.sin(theta)*Math.sin(phi);
        mcList[i-1].cz = radius * Math.cos(phi);
        
        if (aA[i-1]) {
            aA[i-1].style.left=mcList[i-1].cx+oDiv.offsetWidth/2-mcList[i-1].offsetWidth/2+'px';
            aA[i-1].style.top=mcList[i-1].cy+oDiv.offsetHeight/2-mcList[i-1].offsetHeight/2+'px';
        }
        
    }
}

function doPosition()
{
    var l=oDiv.offsetWidth/2;
    var t=oDiv.offsetHeight/2;
    for(var i=0;i<mcList.length;i++)
    {
        if (aA[i]) {
            aA[i].style.left=mcList[i].cx+l-mcList[i].offsetWidth/2+'px';
            aA[i].style.top=mcList[i].cy+t-mcList[i].offsetHeight/2+'px';
            
            aA[i].style.fontSize=Math.ceil(18*mcList[i].scale/2)+8+'px';
            
            aA[i].style.filter="alpha(opacity="+100*mcList[i].alpha+")";
            aA[i].style.opacity=mcList[i].alpha;
        }
        
    }
}

function sineCosine( a, b, c)
{
    sa = Math.sin(a * dtr);
    ca = Math.cos(a * dtr);
    sb = Math.sin(b * dtr);
    cb = Math.cos(b * dtr);
    sc = Math.sin(c * dtr);
    cc = Math.cos(c * dtr);
}

class Main extends Component {
    constructor (props) {
      super(props)
      this.state = {
        users: [
          '潘毅',
          '沈均行',
          '穆萌',
          '葛强强',
          '胡浩',
          '田健',
          '顾威',
          '石娜娜',
          '黎军霞',
          '杨梦',
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
          '陈文超',
          '田元'
        ],
        show: false,
        result: []
      }
    }
    
    addUser = () => {
        let users = JSON.parse(localStorage.getItem('users'))
        users.push('ceshi')
        localStorage.setItem('users', JSON.stringify(users))
    }

    startHandle = () => {
        let userList = this.state.users
        let hasReceive = []
        let length = userList.length
        let sendUser
        let count = 1
        const _self = this

        function send(index) {
            sendUser = userList[index]
            let list = getWillReceiveList()
            let randomIndex = Math.floor(Math.random()*list.length)
            // 若是最后一个人，发现前面的人刚好形成一个循环，则无人可送
            let receiveUser = list[randomIndex]
            hasReceive.push(receiveUser)
        }

        function getWillReceiveList() {
            let arr = userList.filter((item) => !hasReceive.includes(item))
            arr = arr.filter((item) => item !== sendUser)
            return arr
        }

        function start(){
            for (let i =0 ;i < length; i++) {
                send(i)
            } 
            // 若是自循环了，则重新匹配
            if (hasReceive[hasReceive.length-1] === undefined) {
                hasReceive = []
                start()
            }
            _self.setState({
                result: hasReceive
            })
        }

        _self.setState({
            show: true
        })
        let timer = setInterval(() =>{
            count++
            if (count > 140){
                clearInterval(timer)
                count = 1
                _self.setState({
                    show: false
                })
            }else {
                start()
            }
            
        }, 100)
    }

    componentDidMount() {
        const users = localStorage.getItem('users')
        if (users) {
            this.setState({
                users: JSON.parse(users)
            }, rotate)
        } else {
            localStorage.setItem('users', JSON.stringify(this.state.users))
            rotate()
        }
    }

    render () {
        const {users, result, show} = this.state
      return (
        <div className="gift">
            <div className="left">
                <div className="webxiu-tags" id="webxiu-tags">
                    {
                        users.map((item, index) =>
                            <a className={`color-${index}`} href="void()" key={index}>{item}</a>
                        )
                    }
                </div>
                <button onClick={this.startHandle}>开启盲盒抽取</button>
            </div>
            <div className="right">
                {
                    show && <Date />
                }
                {
                    result.length > 0 &&
                    <ul>
                        {
                            users.map((item, index) => 
                                <li key={index}>
                                    <span>{item}</span>
                                    <span>{result[index]}</span>
                                </li>
                            )
                        }
                    </ul>
                }
                
            </div>
        </div>
      );
    }
    
  }
  
  export default Main;