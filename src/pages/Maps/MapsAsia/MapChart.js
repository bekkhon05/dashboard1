import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
const geoUrl3 ="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
  return (
    <div maxHeight="370px">
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl3}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;