import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import location1Image from './images/cc4f05de75ac121ab93c023650942875.jpg'
import location2Image from './images/a6e18cc4b2145bc8aedcdb267288ca2c.jpg'
import location3Image from './images/148ee0167fa19f6fc91604f223b42395.jpg'
import './Style/Location.css'
import { useSpring, animated } from 'react-spring';


const MyComponent = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [location1, setLocation1] = useState(false)
    const [location2, setLocation2] = useState(false)
    const [location3, setLocation3] = useState(false)
    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? `translateY(0)` : `translateY(100%)`,
    });

    const handleClick = () => {
        setIsVisible(!isVisible)
        setLocation1(!location1)
        setLocation2(!location2)
        setLocation3(!location3)
    }

    return (
        <div>
            <button className="view-locations-btn" onClick={handleClick}>View Locations</button>
            <animated.div style={props}>
                {location1 && (
                    <Card className="text-center">
                        <Card.Img variant="top" src={location1Image} />
                        <Card.Body>
                            <Card.Title> Kashmir </Card.Title>
                            <Card.Text>
                                Our Shop in Kshmir 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
                {location2 && (
                    <Card className="text-center">
                        <Card.Img variant="top" src={location2Image} />
                        <Card.Body>
                            <Card.Title>Toronto</Card.Title>
                            <Card.Text>
                                In the heart of Toronto.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
                {location3 && (
                    <Card className="text-center">
                        <Card.Img variant="top" src={location3Image} />
                        <Card.Body>
                            <Card.Title>Saskatoon</Card.Title>
                            <Card.Text>
                                Into the praries of Saskatoon.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </animated.div>
        </div>
    )
}


export default MyComponent
