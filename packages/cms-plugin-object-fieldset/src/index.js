// @flow
import React, { Component } from "react";

type Props = defaultProps & {
  value: {[string]: any}
}

export default class Fieldset extends Component<Props> {
  render() {
    const { id, renderChildren } = this.props;
    /**
     * pass onChange, and id to each child
     */
    const childrenWithProps = renderChildren({
      id
    });
    return <fieldset style={{
      border: 0,
      minWidth: 0,
      paddingLeft: 32,
      borderLeft: '1px solid orange'
    }}>{childrenWithProps}</fieldset>;
  }
}
