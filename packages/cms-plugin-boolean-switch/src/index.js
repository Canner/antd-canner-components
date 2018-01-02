// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch } from "antd";
import { injectIntl } from "react-intl";

type Props = defaultProps & {
  value: boolean,
  uiParams: {
    yesText: string,
    noText: string
  }
}

@injectIntl
export default class SwitchBoolean extends Component<Props> {
  onChange = (e: boolean) => {
    this.props.onChange(this.props.id, "update", e);
  }

  render() {
    const { value, uiParams, intl } = this.props;
    const defaultYesText = intl.formatMessage({ id: "boolean.switch.yesText" });
    const defaultNoText = intl.formatMessage({ id: "boolean.switch.noText" });
    return (
      <div id="input">
        <Switch
          onChange={this.onChange}
          checked={value}
          checkedChildren={
            uiParams && uiParams.yesText ? uiParams.yesText : defaultYesText
          }
          unCheckedChildren={
            uiParams && uiParams.noText ? uiParams.noText : defaultNoText
          }
        />
      </div>
    );
  }
}