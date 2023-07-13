import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Introduction to ATS' subtitle='In 1998, ATS Infrastructure Ltd. originated under the flagship of Mr. Getamber Anand, as an emerging new response to the growing need for quality housing and residential real estate development specifically in Delhi and the National Capital Region (NCR).' />

            <p>We have come a long way since, setting new standards in the real estate space with each project being better than the one last delivered while growing exponentially both in quality and profitability. The company witnessed a phenomenal growth with nearly 3.5 million sq. mtr. space already delivered and 2.5 million sq. mtr. space underway, nearly 26000+ satisfied customers, 4500 dedicated workforce, extraordinary in-house construction, security, facility and maintenance teams and unmatched brand equity. ATS is currently operating in 8 states & aspires to expand its footprint in different geographies across the country.</p>
            <p>ATS aspires to deliver an average of 5 million square feet of residential development annually. With green surroundings, modern architecture, world-class amenities and a host of convenient facilities, every ATS home is a story in itself.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
