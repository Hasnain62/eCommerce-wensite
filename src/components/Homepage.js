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

      <h1>The luxury of Pashmina </h1>
     <p>
          Here at Cashmere Store, we offer a wide selection of luxurious and stylish pashmina shawls, wraps, and scarves in a range of colors and patterns. Our pashminas are made from the highest quality materials and are designed to be versatile, comfortable, and fashionable.
      </p>
      
      <p>Thank you for visiting our store. We hope you find the perfect pashmina for your needs, and we look forward to serving you.</p>
      <p>Best regards,</p>
      <p>Cashmere Store</p> 

     </div>
    </Waypoint>
    
  );
};

export default Homepage;
