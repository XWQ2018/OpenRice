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
        ]
      }
  }

  goBack(){
    this.props.history.goBack()
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
            <input type='number'/>
        </div>
      </div>
        <button className="btn-next" >下一步</button>
        <button className="use-email">使用邮件注册</button>
      
    </div>
  }
}

export default CreateUser;