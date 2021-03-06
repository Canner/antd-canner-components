// @flow
import * as React from 'react';
import NumberInput from 'packages/antd-number-input';
import {Divider} from 'antd';
import ExamplePrimitiveValueWrapper from '../ExamplePrimitiveValueHoc';
import type {PrimitiveTypes} from '../types';
import RefId from 'canner-ref-id';

@ExamplePrimitiveValueWrapper(6)
class NumberInputDemo1 extends React.Component<PrimitiveTypes<number>> {
  render() {
    const {value, onChange}= this.props;
    return (
      <React.Fragment>
        <Divider>Number input</Divider>
        <NumberInput
          refId={new RefId("number-input")}
          value={value}
          uiParams={{
            min: 1,
            max: 100,
            step: 2,
            precision: 2,
            unit: " unit"
          }}
          onChange={onChange}
          />
      </React.Fragment>
    );
  }
}

@ExamplePrimitiveValueWrapper(6)
class NumberInputDemo2 extends React.Component<PrimitiveTypes<number>> {
  render() {
    const {value, onChange}= this.props;
    return (
      <React.Fragment>
        <Divider>Disabled number input</Divider>
        <NumberInput
          refId={new RefId("number-input")}
          disabled
          value={value}
          uiParams={{
            min: 1,
            max: 10,
            step: 2,
            unit: " unit"
          }}
          onChange={onChange}
          />
      </React.Fragment>
    );
  }
}

export default class Demo extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <NumberInputDemo1/>
        <NumberInputDemo2/>
      </React.Fragment>
    )
  }
}