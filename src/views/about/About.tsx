import React, {Component} from 'react'
import SwiperCom from '../home/Test'
import './About.css'

class About extends Component<any, any> {
  swiperNav:any
  swiperPage: any
  constructor(props:any) {
    super(props)
    this.state = {
      isActive: 0
    }
    this.swiperNav = React.createRef()
    this.swiperPage = React.createRef()
  }
  changeIndex = (index:number) => {
    console.log('About', index)
    // this.swiperPage.current.getIndex(index)
    // console.log('this.swiperNav.current.swiperId.clickIndex',this.swiperNav.current.swiperId.clickedIndex)
    // this.swiperPage.current.getIndex(this.swiperNav.current.swiperId.clickedIndex)
    // this.swiperPage.current.swiperId.on('click', () => {
    //   // this.clickActive
    //   console.log(this.swiperNav.current.swiperId.activeIndex)
    // })
  }
  componentWillUpdate () {

  }
  spanClick (index:number) {
    this.swiperPage.current.getIndex(index)
  }
  render () {
    const config = {
      watchSlidesProgress : true,
      watchSlidesVisibility : true,
      slidesPerView: 3,
      observer:true,
      observeSlideChildren:true,
      // centeredSlides: true,
      on: {
        tap: () => {
          this.swiperPage.current.getIndex(this.swiperNav.current.swiperId.clickedIndex)
        }
      }

    }
    const config1 = {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      on: {
        slideChange: () => {
          const page = this.swiperPage.current.swiperId
          const Nav = this.swiperNav.current.swiperId
          this.setState({isActive: page.activeIndex})
          const {isActive} = this.state
          Nav.update()
          if (!Nav.slides[isActive].className.includes('swiper-slide-visible')) {
            console.log(`外层isActive ==> ${isActive},,Nav.activeIndex==> ${Nav.activeIndex}`)
            if (isActive > Nav.activeIndex) {
              console.log(222222222)
              var thumbsPerNav = Math.floor(Nav.width / Nav.slides[isActive].offsetWidth) - 1
              console.log(`isActive====> ${isActive}, thumbsPerNav===> ${thumbsPerNav}, isActive - thumbsPerNav ===> ${isActive - thumbsPerNav}`)
              Nav.slideTo(isActive - thumbsPerNav)
            } else {
              console.log(333333)
              Nav.slideTo(page.activeIndex)
            }
          }
        }
    }
    }
    return (
      <div>
        <div className="about-id">
          {/* <div>
            <span className={`test-span ${this.state.isActive === 0 ? "test-span-active" : ''} `} onClick={() => this.spanClick(0)}>1</span>
            <span className={`test-span ${this.state.isActive === 1 ? "test-span-active" : ''} `} onClick={() => this.spanClick(1)}>2</span>
            <span className={`test-span ${this.state.isActive === 2 ? "test-span-active" : ''} `} onClick={() => this.spanClick(2)}>3</span>
          </div> */}
          <SwiperCom config={config} swiperId={"swiperNav"} name="swiperNav" ref={this.swiperNav}>
            <div className={`swiper-slide bg-1 ${this.state.isActive === 0 ? "active-nav" : ''}`} onClick={() => this.changeIndex(0)}>Slide 1</div>
            <div className={`swiper-slide bg-2 ${this.state.isActive === 1 ? "active-nav" : ''}`} onClick={() =>this.changeIndex(1)}>Slide 2</div>
            <div className={`swiper-slide bg-3 ${this.state.isActive === 2 ? "active-nav" : ''}`} onClick={() => this.changeIndex(2)}>Slide 3</div>
            <div className={`swiper-slide bg-2 ${this.state.isActive === 3 ? "active-nav" : ''}`} onClick={() =>this.changeIndex(3)}>Slide 4</div>
            <div className={`swiper-slide bg-3 ${this.state.isActive === 4 ? "active-nav" : ''}`} onClick={() => this.changeIndex(4)}>Slide 5</div>
            <div className={`swiper-slide bg-2 ${this.state.isActive === 5 ? "active-nav" : ''}`} onClick={() =>this.changeIndex(5)}>Slide 6</div>
          </SwiperCom>
          <SwiperCom config={config1} swiperId={"swiperPage"} ref={this.swiperPage}>
            <div className="swiper-slide bg-1">Slide 1</div>
            <div className="swiper-slide bg-2">Slide 2</div>
            <div className="swiper-slide bg-3">Slide 3</div>
            <div className="swiper-slide bg-3">Slide 4</div>
            <div className="swiper-slide bg-3">Slide 5</div>
            <div className="swiper-slide bg-3">Slide 6</div>
          </SwiperCom>
        </div>
      </div>
    )
  }
}

export default About