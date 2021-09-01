import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import { addBand } from "../actions/band";
import Band from "../components/Band";

class BandsContainer extends Component {
  renderBands = () =>
    this.props.bands.map((band, id) => <Band key={id} name={band.name} />);

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ol>{this.renderBands()}</ol>
      </div>
    );
  }
}

export default connect((state) => ({ bands: state.bands }), { addBand })(
  BandsContainer
);
