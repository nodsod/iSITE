import * as React from 'react';
import './App.css';

import { Col, Grid, Image, Row } from 'react-bootstrap';

import mountainBiking from './kaiteriteri-mountain-bike-park.jpg';

class Interests extends React.Component {
  public render() {
    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Image className="App-interestimage" src={mountainBiking} rounded={true} />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="App-interestimage" src={mountainBiking} rounded={true} />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="App-interestimage" src={mountainBiking} rounded={true} />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="App-interestimage" src={mountainBiking} rounded={true} />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className="App-interestimage" src={mountainBiking} rounded={true} />
                    </Col>
                </Row>
             </Grid>
        </div>
    );
  }
}

export default Interests;