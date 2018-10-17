import React, { Component } from 'react';
import {Route,NavLink} from 'react-router-dom';
import Footer from './Footer';
import { Grid } from 'antd-mobile';
import '../sass/Home.scss';
import Head from './Head';
import EatFood from './EatFood';

//引入图片
import img from '../img/dangao.png';
import areaImg from '../img/area.jpg';
import food from '../img/food.jpg';


class Home extends Component{
  constructor(){
    super();
    this.state={
          list:[
            {id:1,text:'火锅',imgurl:img},
            {id:2,text:'甜品',imgurl:img},
            {id:3,text:'炒菜',imgurl:img},
            {id:4,text:'炖汤',imgurl:img},
            {id:5,text:'凉拌',imgurl:img},
            {id:6,text:'烧烤',imgurl:img},
            {id:7,text:'海鲜',imgurl:img},
            {id:8,text:'中式包点',imgurl:img},
          ],

          data:[
            {id:1,text:'广州',imgurl:areaImg},
            {id:2,text:'深圳',imgurl:areaImg},
            {id:3,text:'上海',imgurl:areaImg},
            {id:4,text:'北京',imgurl:areaImg},
            {id:5,text:'杭州',imgurl:areaImg},
            {id:6,text:'苏州',imgurl:areaImg},
            {id:7,text:'福建',imgurl:areaImg},
            {id:8,text:'天津',imgurl:areaImg},
          ],
          food:[
            {id:1,text:'粤菜(广东 )',imgurl:food},
            {id:2,text:'港式',imgurl:food},
            {id:3,text:'川菜(四川)',imgurl:food},
            {id:4,text:'湘菜',imgurl:food},
            {id:5,text:'亚洲菜',imgurl:food},
            {id:6,text:'西餐',imgurl:food},
            {id:7,text:'潮州菜',imgurl:food},
            {id:8,text:'广西菜',imgurl:food},
          ]
    }
  }
  render(){
      return (
        <div>
          {/* <Head/> */}
          <Route component={Head}/>
          <div className='main'>
            <ul className='goodslist'>
              {
                this.state.list.map((item,idx)=>{
                    return <li key={item.id}>
                        <img src={item.imgurl}/>
                        <span>{item.text}</span>
                      </li>
                })
              }
            </ul>
            <div className='areatext'>
                <div className='areatextTitle'>
                  <i></i>
                  地区
                </div>
                <ul className='list'>
                  {
                    this.state.data.map((item,idx)=>{
                      return <NavLink 
                            to={{
                              pathname:'/cityFood',
                              search:`?id=${item.id}`,
                              state:{city:item.text}
                              }} 
                            key={item.id} 
                            className='listItem'>
                            <img src={item.imgurl}/>
                            <span>{item.text}</span>
                        </NavLink>
                    })
                  }
                </ul>
            </div>
            <div className='foodMarket'>
                <div className='food'>
                  <i></i>
                  菜式
                </div>
                <ul className='list'>
                  {
                    this.state.food.map((item,idx)=>{
                      return <li key={item.id}>
                                <img src={item.imgurl}/>
                                <span>{item.text}</span>
                            </li>
                    })
                  }
                </ul>
            </div>
            <EatFood/>
            <Footer/>
          </div>
        </div>
    )
  }
}

export default Home;