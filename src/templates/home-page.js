/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'
import CIPLCarousel from '../components/CIPLCarousel'
// import CIPLTitle from '../components/CIPLTitle'
import ReactRotatingText from 'react-rotating-text'
import img1 from '../../static/img/carousel/1.jpg'
import img2 from '../../static/img/carousel/2.jpg'
import img3 from '../../static/img/carousel/test1.gif'

const slidesMain = [{ imgSrc: img3, imgText: 'Enjoy madi' }, { imgSrc: img2, imgText: 'Enjoy madi' }, { imgSrc: img1, imgText: 'Enjoy madi' }]
// const slidesMain = [{ imgSrc: img3, imgText: 'Enjoy madi' }, { imgSrc: img2, imgText: 'Enjoy madi' }, { imgSrc: img1, imgText: 'Enjoy madi' }]
const slidesSide = [{ imgSrc: img1, imgText: 'Enjoy madi' }, { imgSrc: img2, imgText: 'Enjoy madi' }, { imgSrc: img3, imgText: 'Enjoy madi' }]

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section style={{ background: '#191b67'}}className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-12'>
              <h1 style={{ textAlign: 'center' }} className='title'>
                {/* <CIPLTitle /> */}
                {/* {title} =  */}
                <ReactRotatingText items={['Organizational Transformation', 'Leadership Development', 'Executive Coaching', 'Individual Excellence']} />
              </h1>
              <div style={{display: 'flex', flexDirection: 'row'}} className='row'>
                <CIPLCarousel slides={slidesSide} />
                <CIPLCarousel slides={slidesMain} />
                <CIPLCarousel slides={slidesSide} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-12 is-offest-1'>
            <div className='content'>
              <div>
                <h3 style={{textAlign: 'center'}} className='has-text-weight-semibold is-size-2'>
                  {heading}
                </h3>
                <p style={{ textAlign: 'center'}}>{description}</p>
              </div>
              <Offerings gridItems={offerings.blurbs} />
              <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
