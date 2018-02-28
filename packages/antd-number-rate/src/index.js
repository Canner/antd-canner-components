// @flow
import React, { Component } from "react";
import { Rate } from "antd";

type Props = {
  id: defaultProps.id,
  onChange: defaultProps.onChange,
  value: number,
  uiParams: {
    count: number,
    allowHalf: boolean,
    character: string
  }
};

export default class NumberRate extends Component<Props> {
  onChange = (val: number) => {
    this.props.onChange(this.props.id, "update", val);
  };

  render() {
    const { value, uiParams } = this.props;
    return (
      <div>
        <Rate
          count={uiParams && uiParams.count}
          allowHalf={uiParams && uiParams.allowHalf}
          character={uiParams && uiParams.character}
          value={+value} // eslint-disable-line
          onChange={this.onChange}
        />
      </div>
    );
  }
}
