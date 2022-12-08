import { render } from "react-dom";
import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_map from "highcharts/modules/map";
import OPTIONSB from "./optionsb.json";
import OPTIONS from "./options.json";

class Map extends Component {
  constructor(props) {
    super(props);
    HC_map(Highcharts);

    this.state = {
      currentOption: false,
      hcOptions: OPTIONS,
      dataType: "target"
    };
    console.log(OPTIONS);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      currentOption: !this.state.currentOption,
      hcOptions: this.state.currentOption ? OPTIONS : OPTIONSB
    });
  }

  render() {
    return (
      <div>
        {this.state.hcOptions === null ? (
          <div>
          </div>
        ) : (
          <div>
            <HighchartsReact
              highcharts={Highcharts}
              constructorType="mapChart"
              options={this.state.hcOptions}
            />
          </div>
        )}
      </div>
    );
  }
}
// const App = () => (
//   <div>
//     <h1>Demos</h1>

//     <h2>Highcharts</h2>
//     <Map />
//   </div>
// );

// render(<App />, document.getElementById("root"));

export default Map