import React from 'react';
//import { Button , Navbar} from 'react-bootstrap';
import pashm from './images/Pashmina_Photo-2.jpg'
//import { useSpring, animated } from 'react-spring'
import {Waypoint} from 'react-waypoint';
import { useState } from 'react';
import './Style/Navbar.css'
import MyComponent from './Locations';

const Homepage = () => {

 // const props = useSpring({ to: { marginLeft: 0 }, from: { marginLeft: -1000 } })
 const [animation, setAnimation] = useState(false); 

 return (
   

  <Waypoint onEnter={() => setAnimation(true)} onLeave={() => setAnimation(false)}>
   <div className={`outer-div ${animation ? 'active' : ''} smaller-div`}>
        <img src={pashm} alt= 'Pashmina'  id="my-img" className={`diagonal-image ${animation ? 'active' : ''}`} />
        <MyComponent/>

      <h1>Welcome to our online Pashmina store!</h1>
     {/*<p>
          Here at Cashmere Store, we offer a wide selection of luxurious and stylish pashmina shawls, wraps, and scarves in a range of colors and patterns. Our pashminas are made from the highest quality materials and are designed to be versatile, comfortable, and fashionable.
      </p>
      <p>
          As you browse our collection, you'll find pashminas in a variety of styles, including classic solids, trendy prints, and timeless checks. We also have a selection of pashminas in different sizes, including standard, extra large, and infinity loop styles. Whether you're looking for a cozy wrap to keep you warm on a chilly day, or a chic accessory to dress up an outfit, we have a pashmina that will suit your needs.
      </p>
     {/* <Navbar bg="dark" variant="dark" expand="lg">
       <Navbar.Brand href="#">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar> 
      <p>
        In addition to our pashminas, we also offer a range of pashmina-inspired home decor items, including throw blankets, pillows, and more. These items make the perfect gifts for any pashmina lover, or a stylish addition to your own home.
      </p>
      <p>Thank you for visiting our store. We hope you find the perfect pashmina for your needs, and we look forward to serving you.</p>
      <p>Best regards,</p>
      <p>Cashmere Store</p> */}

     </div>
    </Waypoint>
    
  );
};

export default Homepage;
