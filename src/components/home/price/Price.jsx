import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='ATS homes are known for carrying a soul of their own. With green surroundings, modern architecture, world-class amenities and a host of convenient facilities every ATS home is a story in itself. Over the years, ATS has won multiple awards and recognitions for its commitment to operational excellence and quality standards in delivering residential and commercial spaces.' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
