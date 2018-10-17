import React, { Component } from 'react';
import '../sass/footer.scss';
class Footer extends Component{
  render(){
    return <div className='footer'>
        <select style={{display:"block",width:"100%",height:"35px",backgroundColor:"#857567",padding:"0 0 0 5px"}}>
          <option>语言/简体中文</option>
          <option>语言/繁体</option>
        </select>
        <p>OpenRice《开饭喇！》为中国饮食资讯媒体，助你搜索中国地道美食及餐厅，并提供餐厅资料、食记及评分。</p>
        <div>
          <a href='#'>条款及细则</a>
          <span>/</span>
          <a href='#'>私隐政策</a>
        </div>
        <p><span> © 2018 Openrice Group Inc. All Rights Reserved. 版权所有 不得转载</span></p>
        <p>
          <a>粤ICP备09165602号</a>
          /
          <a>粤公网安备44030402001313号</a>
        </p>
    </div>
  }
}

export default Footer;