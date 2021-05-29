import "./App.css";
import Tilt from 'react-vanilla-tilt'

export default function App() {
  return (
    <div className="container">
      
      
      <Tilt className="box">
        <h2 className="name"> Product Name </h2>
        <a href="/" className="buy">
          {" "}
          Buy Now{" "}
        </a>
        <div className="circle"></div>
        <img
          src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
          className="product"
          alt="no se encontro"
        />
      </Tilt>
      
       
      
      <Tilt className="box">
        <h2 className="name"> Product Name </h2>
        <a href="/" className="buy">
          {" "}
          Buy Now{" "}
        </a>
        <div className="circle"></div>
        <img
          src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
          className="product"
          alt="no se encontro"
        />
      </Tilt>
      
      
      <Tilt className="box">
        <h2 className="name"> Product Name </h2>
        <a href="/" className="buy">
          {" "}
          Buy Now{" "}
        </a>
        <div className="circle"></div>
        <img
          src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
          className="product"
          alt="no se encontro"
        />
      </Tilt>
      
    </div>
  );
}
