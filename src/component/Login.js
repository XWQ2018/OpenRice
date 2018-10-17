import React,{Component} from 'react';
import {render} from 'react-dom';
import '../sass/Login.scss';
import drawerTop from '../img/drawerTop.png';
import { Drawer, List, NavBar, Icon,Button } from 'antd-mobile';
import {Link} from 'react-router-dom';

import '../lib/antd-mobile.css';
import octicons from 'octicons';

class Login extends Component {
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
    console.log(args);
      this.setState({ toggle:'',open: !this.state.open,btnClose:'block'});
      console.log(this.state.open)
  }
  componentWillUpdate(nextProps, nextState){ //隐藏抽屉遮罩层
    console.log(nextProps, nextState)
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
  //返回首页
  toHome(listItem){
    let {history} = this.props;
    switch(listItem.label){
      case '主页':
      this.props.history.goBack()
      console.log(888)
      break;
    }
  }
  //注册新用户
  newUser(){
    let {history} = this.props;
    history.push('/createUser')
  }
  btnLogin(){
    
  }

  render() {
    const sidebar = (
    <div>
      <div className='drawerTop'>
        <p>立即登入尽享更多功能</p>
        <Button type="primary" onClick={this.onOpenChange} >登入/新会员注册</Button>
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

    return (<div className='form-login-zc'>
      <NavBar 
      icon={<div dangerouslySetInnerHTML={{__html:octicons.grabber.toSVG()}}
      />} 
      onLeftClick={this.onOpenChange}>
        <h3>登录</h3>
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
      </Drawer>
      {/* <button className='btnClose' onClick={this.btnClose.bind(this)} style={{display:this.state.btnClose}} dangerouslySetInnerHTML={{__html:octicons.x.toSVG()}}/> */}
      <Link to='/createUser' className='newUser' onClick={this.newUser.bind(this)}>新会员注册</Link>
      <div className='login-form'>
        <span>登录</span>
        <label><input type='text' name="userName" className='userName' placeholder='电话号码/电邮/会员名称'/></label>
        <label><input type='password' name="password" className='password' placeholder='密码'/></label>
        <button className='btnLogin icon-person iconfont' onClick={this.btnLogin.bind(this)}>登录</button>
        <div className='icon-alert iconfont' style={{textAlign:"center",padding:"20px 0",fontSize:'16px',color:'#8E8E8E'}}>忘记密码</div>
      </div>
    </div>);
  }
}

export default Login;