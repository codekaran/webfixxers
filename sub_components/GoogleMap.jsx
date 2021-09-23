import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import classes from "./GoogleMap.module.css";
import { Component } from "react";

export class GoogleMap extends Component {
  state = {};

  render() {
    return (
      <div className={classes.map}>
        <Map
          style={{}}
          zoom={10}
          google={this.props.google}
          initialCenter={{
            lat: 50.88189519302184,
            lng: 3.112954424808732,
          }}
        >
          <Marker
            name={"Current location"}
            position={{
              lat: 50.88189519302184,
              lng: 3.112954424808732,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBirJ5FJYUmf-y1tXOFicE2EhKe9ShsOA0",
})(GoogleMap);
// //
