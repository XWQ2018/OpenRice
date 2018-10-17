import React,{Component} from 'react';
import {render} from 'react-dom';
import { ListView } from 'antd-mobile';

import '../sass/EatFood.scss';

import octicons from 'octicons';
class EatFood extends Component{

  constructor(){
    super();
    this.state={
      food:[
        {id:1,title:'吃货请进！深圳越吃越过瘾的烤生蚝',imgurl:'./img/EatFood/1.jpg',date:'2018-10-12',any:'9999'},
        {id:2,title:'吃货请进！深圳越吃越过瘾的烤生蚝',imgurl:'./img/EatFood/2.jpg',date:'2018-9-13',any:'8888'},
        {id:3,title:'吃货请进！深圳越吃越过瘾的烤生蚝',imgurl:'./img/EatFood/3.jpg',date:'2018-8-12',any:'7777'},
        {id:4,title:'吃货请进！深圳越吃越过瘾的烤生蚝',imgurl:'./img/EatFood/4.jpg',date:'2018-7-22',any:'6666'},
        {id:5,title:'吃货请进！深圳越吃越过瘾的烤生蚝',imgurl:'./img/EatFood/5.jpg',date:'2018-6-12',any:'5555'},
      ]
    }
  }

  render(){
    return(
      <div className='EatFoot'>
          <div className='EatIcon'>
            <div className='EatIcon-left'>
              <i dangerouslySetInnerHTML={{__html:octicons.note.toSVG()}}/>
              <span>饮食记</span>
            </div>
            <div className='EatIcon-right'>
              <span>更多</span>
              <i dangerouslySetInnerHTML={{__html:octicons['chevron-right'].toSVG()}}/>
            </div>
          </div>
          <ul className='goodsList'>
            {
              this.state.food.map((item,idx)=>{
                return <li key={item.id}>
                      <div className='EatImg'>
                        <img src={item.imgurl}/>
                      </div>
                      <div className='EatInfo'>
                        <p>{item.title}</p>
                        <div className="date-eye">
                          <div>
                            <i dangerouslySetInnerHTML={{__html:octicons.calendar.toSVG()}}/>
                            <span>{item.date}</span>
                          </div>
                          <div>
                            <i dangerouslySetInnerHTML={{__html:octicons.eye.toSVG()}}/>
                            <span>{item.any}</span>
                          </div>
                        </div>
                      </div> 
                  </li>
              })
            }
          </ul>
      </div>
    )
  }
}

export default EatFood;