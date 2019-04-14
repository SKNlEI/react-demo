import React, {Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './Test.css'

interface Iprops {
  config?: any,
  swiperId: string,
  name?: string
}
// let swiperId:any
export default class Test extends Component<Iprops> {
  swiperId:any
  constructor(props:any) {
    super(props)
  }
  componentDidMount () {
    this.swiperId = new Swiper (`#${this.props.swiperId}`,{
      ...this.props.config,
    })
  }
  getIndex (index:number) {
    this.swiperId.slideTo(index);
  }
  getClassName (index: number) {
    console.log('getClassName',JSON.stringify(this.swiperId.slides[index].className))
  }
  render () {
    return (
      <div>
        <div id={this.props.swiperId} className="swiper-container id1">
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
          <div className="swiper-pagination"></div>
          </div>
      </div>
    )
  }
}