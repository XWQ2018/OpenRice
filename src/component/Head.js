import React,{Component} from 'react';
import {render} from 'react-dom';
import '../sass/Head.scss';
import drawerTop from '../img/drawerTop.png';
import { Drawer, List, NavBar, Icon,Button } from 'antd-mobile';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from './Home';

import octicons from 'octicons';

class Head extends Component {
  constructor(){
    super();
    this.state={
      open: false,
      toggle:'none',
      btnClose:"none",
      data:[
        {
          ID: '1',
          label: '主页',
          icon:'home'
        }, {
          ID: '2',
          label: '饮食记',
          icon:"gear"
        },
        {
          ID: '3',
          label: '我的OpenRice',
          isLeaf: true,
          icon:"calendar"
        },
        {
          ID: '4',
          label: '设定',
          isLeaf: true,
          icon:'calendar'
        },
        {
          ID: '5',
          label: '新增餐厅',
          isLeaf: true,
          icon:'calendar'
        },
      ]
    }
  }
  //抽屉状态改变触发该事件
  onOpenChange = (...args) => {
    // console.log(args);
      this.setState({ toggle:'',open: !this.state.open,btnClose:'block'});
      console.log(this.state.open)
  }
  componentWillUpdate(nextProps, nextState){ //隐藏抽屉遮罩层
    // console.log(nextProps, nextState)
    if(this.state.open===true){
      this.setState({ toggle:'none',btnClose:'none'});
    }
  }
  //搜索栏
  btnSearch(){
    // console.log(8888)
  }
  //关闭抽屉
  btnClose(props){
    this.onOpenChange()
    // console.log(666)
  }
  //抽屉列表跳转
  toHome(listItem){
    switch(listItem.label){
      case '主页':
      this.onOpenChange()
      break;
    }
  }
  toLogin(){
    // console.log(this)
    let {history} = this.props;
    history.push('/login')
  }
  toCity(){
    console.log(9999)
  }

  render() {
    const sidebar = (
    <div>
      <div className='drawerTop'>
        <p>立即登入尽享更多功能</p>
        <Button type="primary" onClick={this.toLogin.bind(this)}>登入/新会员注册</Button>
      </div>
      <List>
        {this.state.data.map((item, idx) => {
          return (<List.Item 
            onClick={this.toHome.bind(this,item)}
            key={item.ID}
            thumb={<div dangerouslySetInnerHTML={{__html:octicons[item.icon].toSVG()}}/>}
          >{item.label}</List.Item>);
        })}
      </List>
      <button className='btnClose' onClick={this.btnClose.bind(this)} style={{display:this.state.btnClose}} dangerouslySetInnerHTML={{__html:octicons.x.toSVG()}}/>
    </div>);

    return (<div className='head'>
      <NavBar 
      icon={
      <div dangerouslySetInnerHTML={{__html:octicons.grabber.toSVG()}}/>
      } 
      onLeftClick={this.onOpenChange}>
        <p className='city' onClick={this.toCity.bind(this)}>深圳
          <span dangerouslySetInnerHTML={{__html:octicons['triangle-down'].toSVG()}}/>
        </p>
      </NavBar>
      <Drawer
        dragToggleDistance={10}
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight,display:this.state.toggle }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
      {/* <button className='btnClose' onClick={this.btnClose.bind(this)} style={{display:this.state.btnClose}} dangerouslySetInnerHTML={{__html:octicons.x.toSVG()}}/> */}
      </Drawer>
      <div className='btnSearch'>
        <input placeholder='请输入内容'/>
        <button className='search' onClick={this.btnSearch}>高级搜索</button>
      </div>
      {/* <button className='btnClose' onClick={this.btnClose.bind(this)} style={{display:this.state.btnClose}} dangerouslySetInnerHTML={{__html:octicons.x.toSVG()}}/> */}
      <Route path='/home' component={Home}/>
    </div>);
    
  }
}

export default Head;