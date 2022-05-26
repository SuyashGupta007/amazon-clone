import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/PM-Speech/post_launch/1500x600_Hero-Tall._CB656405244_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            id="12321341"
            title="The lean startup:how Constant Innovation Creates Radically Successful businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Seagate Barracuda Fast SSD 1TB External Solid State Drive Portable – USB-C USB 3.0 for PC, Mac, Xbox & PS4-3-Year "
            price={239.0}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/91I+3zAb2qL._AC_UL160_SR160,160_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Logitech Pebble M350 Wireless Mouse with Bluetooth or USB - Silent, Slim Computer Mouse with Quiet Click for Laptop, Notebook"
            price={92.99}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/611+7RKNwGL._AC_UL160_SR160,160_.jpg"
          />
          <Product
            id="23445930"
            title="Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black) "
            price={300}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Kamya/D20011261_IN_HETV_CLP_JAN_CLP_tile_440x4502.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)"
            price={999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Haier 565 L with Inverter Side-by-Side Door Refrigerator (HRF-619SS, Silver) "
            price={550}
            rating={5}
            image="https://m.media-amazon.com/images/I/21HztzSoG0L.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
