import React from 'react'
import '../Product/Product.css'
import kaju3 from '../Images/kaju1.jpg'
import kaju2 from '../Images/kaju2.jpg'
import kaju1 from '../Images/kaju3.jpg'
import { useNavigate} from 'react-router-dom'

export const Product = () => {
  const navigate = useNavigate();
  const OnClick=()=>{
    navigate('/cart')
  }
  return (

    <div className='product--items'>
      <h1 className="text-center heading" >Products</h1>


      <div className="d-flex justify-content-evenly">

      <div class="card">
        <img src={kaju1} class="card-img-top" alt="..." />

        <div class="card-body">
          <h5 class="card-title">Whole Cashew W-210 1Kg</h5>
          <s class="card-mrp">MRP Rs.999</s>
          <p class="card-price">Our Price Rs.799</p>
          <button type="button" class="btn btn-Success" onClick={OnClick}>Buy Now </button>
        </div>
      </div>

      <div class="card">
        <img src={kaju2} class="card-img-top" alt="..." />

        <div class="card-body">
        <h5 class="card-title">Split Cashew 1Kg</h5>
        <s class="card-mrp">MRP Rs.899</s>
        <p class="card-price">Our Price Rs.699</p>          
        <button type="button" class="btn btn-Success"onClick={OnClick}>Buy Now</button>
        </div>
      </div>

      <div class="card">
        <img src={kaju3} class="card-img-top" alt="..." />

        <div class="card-body">
        <h5 class="card-title">Four Piece Cashew 1Kg</h5>
        <s class="card-mrp">MRP Rs.799</s>
        <p class="card-price">Our Price Rs.599</p>
        <button type="button"  class="btn btn-Success" onClick={OnClick}>Buy Now</button>
        </div>
      </div>


      </div>
    </div>

  )
}
