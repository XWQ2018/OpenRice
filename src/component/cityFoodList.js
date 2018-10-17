import React,{Component} from 'react';
import {render} from 'react-dom';
import '../sass/cityFoodList.scss';

class List extends Component{
  constructor(){
    super();
    this.state={
        goodsList:[
          {
            id:1,
            title1:'海底捞火锅(金光华店)',
            title2:'国贸',
            price:'41-100',
            desc:'粤菜(广东)/火锅',
            haop:'38',
            chap:'1',
            bigImg:'./img/EatFood/1.jpg',
            smallImg:[
              {id:1,img:'./img/EatFood/1.jpg'},
              {id:2,img:'./img/EatFood/1.jpg'},
              {id:3,img:'./img/EatFood/1.jpg'},
              {id:4,img:'./img/EatFood/1.jpg'},
              {id:5,img:'./img/EatFood/1.jpg'},
              {id:6,img:'./img/EatFood/1.jpg'},
            ],
          },
          {
            id:2,
            title1:'海底捞火锅(金光华店)',
            title2:'国贸',
            price:'41-100',
            desc:'粤菜(广东)/火锅',
            haop:'38',
            chap:'1',
            bigImg:'./img/EatFood/1.jpg',
            smallImg:[
              {id:1,img:'./img/EatFood/1.jpg'},
              {id:2,img:'./img/EatFood/1.jpg'},
              {id:3,img:'./img/EatFood/1.jpg'},
              {id:4,img:'./img/EatFood/1.jpg'},
              {id:5,img:'./img/EatFood/1.jpg'},
              {id:6,img:'./img/EatFood/1.jpg'},
            ],
          },
          {
            id:3,
            title1:'海底捞火锅(金光华店)',
            title2:'国贸',
            price:'41-100',
            desc:'粤菜(广东)/火锅',
            haop:'38',
            chap:'1',
            bigImg:'./img/EatFood/1.jpg',
            smallImg:[
              {id:1,img:'./img/EatFood/1.jpg'},
              {id:2,img:'./img/EatFood/1.jpg'},
              {id:3,img:'./img/EatFood/1.jpg'},
              {id:4,img:'./img/EatFood/1.jpg'},
              {id:5,img:'./img/EatFood/1.jpg'},
              {id:6,img:'./img/EatFood/1.jpg'},
            ],
          },
        ]
    }
  }
  render(){
    const goodsList=
      this.state.goodsList.map(item=>{
        // console.log(item)
        return <li key={item.id}>
          <h2>{`${item.id} . ${item.title1}`}</h2>
          <div className='List'>
            <div className='List-left-img'>
              <img src={item.bigImg}/>
            </div>
            <div className='List-right-text'>
              <h3>{item.title2}</h3>
              <p>
                <span>￥<i>{item.price}</i></span>
                <span className='icon icon-primitive-dot iconfont'></span>
                <span>{item.desc}</span>
              </p>
              <p className='List-right-text-mile'>
                <span><i></i>{item.haop}</span>
                <span><i></i>{item.chap}</span>
              </p>
            </div>
          </div>
          <ul className='goodsList-bt-img'>
            {
              item.smallImg.map(item=>{
                return <li key={item.id}>
                    <img src={item.img}/>
                </li>
              })
            }
          </ul>
          <div className='userCollection'>
            <span><i className='icon-bookmark iconfont'></i></span>
            <span>2.3<i>k</i></span>
          </div>
        </li>
      })
      
    return(
      <ul className='goodsList'>
        {goodsList}
      </ul>
    )
  }
}

export default List;