import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import img1 from './assets/test1.gif'
import img2 from './assets/2.jpg'

class CIPLCarousel extends Component {
//   constructor (props) {
//     super(props)
//     }
  render () {
    // console.log(this.props.slides)
    let slideRendered = this.props.slides.map(function (slide) {
      return (
        <div>
          <img src={slide.imgSrc} />
          <p className='legend'>{slide.imgText}</p>
        </div>
      )
    })
    return (
      <div style={{ marginLeft: '2%', marginRight: '2%', width: '30%', position: 'relative'}}>
        <Carousel>
          {slideRendered}
        </Carousel>
      </div>
    )
  }
}

export default CIPLCarousel
