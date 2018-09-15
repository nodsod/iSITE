import * as React from 'react';
import {Button, Carousel} from 'react-bootstrap';

import './App.css';
import mountainBiking from './kaiteriteri-mountain-bike-park.jpg';


class CarouselDisplay extends React.Component {

  public render() {
    return (
        <div>
            <Carousel>
                <Button>default</Button>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={mountainBiking} />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={mountainBiking} />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={mountainBiking} />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
}

export default CarouselDisplay;