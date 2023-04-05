import React from 'react'
import Image1 from '../Images/Image 1.jpg'
import Image2 from '../Images/Image 2.jpg'

const Home = () => {
  return (
    <div className="Home">
      <h1 className='mainTitle'>WeHire</h1>
      <p className='caption'>An HR Consultancy, Where Talent meets Opportunity</p>
      <br /><br /><br />
      <br /><br /><br /><br />
      <div className="Work">
        <div className="sec">
          <div className="content">
            <h1>Internship</h1>
            <p>We help you land up internships in the field of Data Analytics, Software Development and Project Management</p>
            <button>Find More</button>
          </div>
          <div className="image">
            <img src={Image1} alt="img1" />
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="sec">
        <div className="image">
          <img src={Image2} alt="img2" />
        </div>
        <div className="content">
        <h1>Full-Time</h1>
            <p>We help you land up Full-Time offers in the field of Data Analytics, Software Development and Project Management.</p>
            <button>Learn More</button>
        </div>
        
        </div>
      </div>
    </div>

  )
}

export default Home