import React from 'react'
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
   <div className="fp">
    <div className="fpItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" className="fpImg" />
    <span className='fpName'>BlueStar hotel</span>
    <span className='fpCity'>Mumbai</span>
    <span className='fpPrice'>Starting from ₹5000</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
   </div>
   <div className="fpItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" className="fpImg" />
    <span className='fpName'>Trident hotel</span>
    <span className='fpCity'>Chennai</span>
    <span className='fpPrice'>Starting from ₹10000</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
   </div>
   <div className="fpItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" className="fpImg" />
    <span className='fpName'>Mayfair Resort</span>
    <span className='fpCity'>Delhi</span>
    <span className='fpPrice'>Starting from ₹20000</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
   </div>
     <div className="fpItem">
    <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" className="fpImg" />
    <span className='fpName'>Hotel Taj</span>
    <span className='fpCity'>Mumbai</span>
    <span className='fpPrice'>Starting from ₹12000</span>
    <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
    </div>
   </div>
   </div>
  )
}

export default FeaturedProperties;