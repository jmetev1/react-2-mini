import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.edit
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.edit !== this.state.edit) {
      this.setState({allowEdit: newProps.edit})
    }
  }

  render() {
    const {update} = this.props;
    return (
      <select  disabled={this.state.allowEdit === false} onChange={(e) => update(e.target.value)} className="dropDownContainer">
        <option  value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}