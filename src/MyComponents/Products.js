import React from 'react'
import kaju3 from './Images/kaju1.jpg'
import kaju2 from './Images/kaju2.jpg'
import kaju1 from './Images/kaju3.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import '../App.css';
import './Products.css';


export const Products = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <h1 className="text-center heading" >Products</h1>
      <Carousel responsive={responsive}>

        <div className='card'>
          <img className="product--image" src={kaju1} alt='product image' width="250px" height="250px"></img>
          <h3>Whole Cashew<br /> W-210 1Kg</h3>
          <s className='MRP'>MRP Rs.999</s>
          <p className='price'>Our Price Rs.799</p>
          <p>
            <div className='qty'>
            <label for="qty" >Quantity:</label>
            <select name="qty" id="qty">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            </div>
            <br/>
            <button>Add to Cart</button>
          </p>
          <p>
            <button>Buy Now</button>
          </p>
        </div>

        <div className='card'>
          <img className="product--image" src={kaju2} alt='product image' width="250px" height="250px"></img>
          <h3>Split Cashew <br />1Kg</h3>
          <s className='MRP'>MRP Rs.899</s>
          <p className='price'>Our Price Rs.699</p>
          <p>
            <button>Add to Cart</button>
          </p>
          <p>
            <button>Buy Now</button>
          </p>
        </div>

        <div className='card'>
          <img className="product--image" src={kaju3} alt='product image' width="250px" height="250px"></img>
          <h3>Four Piece Cashew <br />1Kg</h3>
          <s className='MRP' font-size="22px">MRP Rs.799</s>
          <p className='price'>Our Price Rs.599</p>
          <p>
            <button>Add to Cart</button>
          </p>
          <p>
            <button>Buy Now</button>
          </p>
        </div>


      </Carousel>;
    </div>
  )
}
