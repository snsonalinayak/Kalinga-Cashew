import React from 'react'
import '../Product/Product.css'
import kaju3 from '../Images/kaju1.jpg'
import kaju2 from '../Images/kaju2.jpg'
import kaju1 from '../Images/kaju3.jpg'
import { useNavigate} from 'react-router-dom'

export const Product = () => {
  const navigate = useNavigate();
  const OnClick=()=>{
    navigate('/about')
  }
  return (

    <div className='product--items'>
      <h1 className="text-center heading" >Products</h1>


      <div className="d-flex justify-content-evenly">

      <div class="card">
        <img src={kaju1} class="card-img-top" alt="..." />

        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="card">
        <img src={kaju2} class="card-img-top" alt="..." />

        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-Success">Go somewhere</a>
        </div>
      </div>

      <div class="card">
        <img src={kaju3} class="card-img-top" alt="..." />

        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button"  class="btn btn-Success" onClick={OnClick}>Go somewhere</button>
        </div>
      </div>


      </div>
    </div>

  )
}
