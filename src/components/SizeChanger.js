import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.edit !== this.state.allowEdit) {
      this.setState({allowEdit: newProps.edit})
    }
  }
  render() {
    return (
      <select disabled={this.state.allowEdit === false} className="dropDownContainer" onChange={(e)=> this.props.update(e.target.value)}>
        <option value="12px"> 12 </option>
        <option value="13px"> 13 </option>
        <option value="14px"> 14 </option>
      </select>
    )
  }
}