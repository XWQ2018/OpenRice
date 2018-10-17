import React,{Component} from 'react';
import {render} from 'react-dom';
<<<<<<< HEAD
import Head from './Head';
class cityFood extends Component{
  constructor(){
    super();
    this.state={

    }
  }
  componentDidMount(){
    console.log(this.props)
=======
import '../sass/cityFood.scss';
import { Drawer, List, NavBar, Icon,Button,NoticeBar } from 'antd-mobile';
import {Route,Switch,withRouter} from 'react-router-dom';

import CityFoodList from './cityFoodList';
import Footer from './Footer';

import octicons from 'octicons';

class cityFood extends Component {
  constructor(){
    super();
    this.state={
      open: false,
      toggle:'none',
      btnClose:"none",
      city:'所有深圳',
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
  //根据首页传过来的城市发起请求获取数据
  componentWillMount(){
    if(this.props.history.location.state){
      let city = this.props.history.location.state.city;
      this.state.city = `所有${city}`;
    }

>>>>>>> 更新组件
  }
  componentWillReceiveProps(props){
    
  }
<<<<<<< HEAD
  render(){
    console.log(this.props.match)
      return(
        <div>

        <div>城市热门门店</div>
      </div>
    )
  }

=======
  //抽屉状态改变触发该事件
  onOpenChange = (...args) => {
    // console.log(args);
      this.setState({ toggle:'',open: !this.state.open,btnClose:'block'});
      // console.log(this.state.open)
  }
  //open状态变化时隐藏抽屉遮罩层
  componentWillUpdate(nextProps, nextState){ 
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
  }
  //抽屉列表跳转
  toHome(listItem){
    switch(listItem.label){
      case '主页':
      this.props.history.goBack();
      break;
    }
  }
  toLogin(){
    // console.log(this)
    let {history} = this.props;
    history.push('/login')
  }
  closeMessage(){
    console.log(888)
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

    return (<div className='cityFood'>
      <div className='cityFood-top'>
        <div 
        onClick={this.onOpenChange.bind(this)} 
        className='icon-three-bars iconfont cityFood-top-lefticon'>
          <span ></span>
          <span>所有结果</span>
        </div>
        <div className='cityFood-top-title'></div>
        <div className='cityFood-top-right'>
          <i className='icon-search iconfont'></i>
          <i className='icon-milestone iconfont'></i>
        </div>
      </div>
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
      </Drawer>
      <div className='cityFood-main'>
        <div className='closeMessage'>
          <NoticeBar mode="closable" onClick={this.closeMessage} >{this.state.city}</NoticeBar>
        </div>
        <div className='cityFood-main-sort'>
          <button className='btn btn-left'><i ></i>筛选/排序</button> 
          <button className='btn btn-right'><i></i>已收藏</button>
        </div>
        <CityFoodList/>
        <Footer/>
      </div>
    </div>);
  }
>>>>>>> 更新组件
}

export default cityFood; 