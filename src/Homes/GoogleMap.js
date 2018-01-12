import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import GoogleMapReact from "google-map-react";

const Container = styled.div`
  position: fixed;
  height: 500px;
  width: 100%;
  z-index: -2;
`;
console.log(process.env.REACT_APP_GOOGLE_API);
const Component = styled.div``;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API,
          language: "en"
        }}
      >
        <Container lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
      </GoogleMapReact>
    );
  }
}
