import React from 'react'
import Badge  from './components/Badge/Badge'
import Banner from './components/Banners/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial/Testimonial'
function App() {

  return (
      <>
        <div>
          <div className="badge-container">
            <Badge shape="pill" color="gray"/>
            <Badge shape="pill" color="red"/>
            <Badge shape="pill" color="yellow"/>
            <Badge shape="pill" color="green"/>
            <Badge shape="pill" color="blue"/>
            <Badge shape="pill" color="indigo"/>
            <Badge shape="pill" color="purple"/>
            <Badge shape="pill" color="pink"/>
          </div>
          <div className="badge-container">
            <Badge color="gray"/>
            <Badge color="red"/>
            <Badge color="yellow"/>
            <Badge color="green"/>
            <Badge color="blue"/>
            <Badge color="indigo"/>
            <Badge color="purple"/>
            <Badge color="pink"/>
          </div>
        </div>

        <div className="banner-container">
        <Banner title="Attention" status="warning"/>
        <Banner title="You donked up" status="error"/>
        <Banner title="Hello There" status="success"/>
        <Banner title="Um Hi" status="neutral"/>
        </div>
        <div className="banner-container">
        <Banner title="Attention" status="warning">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
        </Banner>
        <Banner title="You donked up" status="error">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
        </Banner>
        <Banner title="Hello There" status="success">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
        </Banner>
        <Banner title="Um Hi" status="neutral">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
        </Banner>
        </div>
        <div className='card-container'>
            <Card title="Easy Deployment">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
            </Card>
        </div>
        <div className='testimonial-container'>
          <div className='desktop-testimonial-container'>
              <Testimonial 
                  source="/Image.png" 
                  alt="Testimonial author" 
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. " 
                  author="May Anderson Desktop" 
                  title="Workation, CTO"
              />
            </div>
            <div className='mobile-testimonial-container'>
              <Testimonial 
                  source="/Image.png" 
                  alt="Testimonial author" 
                  quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. " 
                  author="May Anderson Mobile" 
                  title="Workation, CTO"
              />
            </div>
            
        </div>
      </>
  )
}

export default App
