import React,{Component} from 'react';
import {render} from 'react-dom';

//样式
import '../sass/createUser.scss';

class CreateUser extends Component {
  constructor(){
    super()
      this.state={
        country:[
          {id:1,title:'+852(香港)'},
          {id:2,title:'+542(澳门)'},
          {id:3,title:'+742(台湾)'},
          {id:4,title:'+262(日本)'},
          {id:5,title:'+472(菲律宾)'},
          {id:6,title:'+572(印尼)'},
          {id:7,title:'+382(美国)'},
        ],
        btnColor:'rgb(197, 194, 194)',
        warning:'none',
        val:'',
      }
  }
  //返回上一页
  goBack(){
    this.props.history.goBack()
  }
  //当输入框获得焦点并且输入内容时，按钮高亮状态
  onInput(){
      this.state.val=document.querySelector('.inputPhone').value;
      // console.log(val)
      if(this.state.val){
        this.setState({btnColor:'rgb(255, 203, 5)'});
      }else{
        this.setState({btnColor:'rgb(197, 194, 194)'});
      }
  }
  //失去焦点时，如果为空则警告显示
  onBlur(){
    console.log(888)
    if(!this.state.val){
      this.setState({warning:''});
    }
  }

  render(){
    return <div className='createUser'>
      <div className='createUser-top'>
        <div className='icon icon-reply iconfont' onClick={this.goBack.bind(this)}></div>
        <div className='createUser-top-title'>新会员注册</div>
      </div>
      <p style={{padding:"10px",fontSize:"16px",textAlign:"center"}}>请输入电话号码，我们将通过短信发送验证码。</p>
      <div className='createUser-form'>
        <div className='createUser-form-left'>
          <p>手机号码</p>
          <select>
            {
              this.state.country.map(item=>{
                  return <option key={item.id}>{item.title}</option>
              })
            }
          </select>
        </div>
        <div className='createUser-form-right'>
            <input type='number' className='inputPhone' onBlur={this.onBlur.bind(this)} onInput={this.onInput.bind(this)}/>
        </div>
      </div>
        <p className='icon-alert iconfont' style={{display:this.state.warning}}>请输入有效电话号码</p>
        <button className="btn-next" style={{backgroundColor:this.state.btnColor}} >下一步</button>
        <button className="use-email">使用邮件注册</button>
      
    </div>
  }
}

export default CreateUser;