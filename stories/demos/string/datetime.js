// @flow
import React, {Component, Fragment} from 'react';
import Datetime from 'packages/antd-string-date_time_picker';
import cmsLocale from 'packages/antd-locales';
import {IntlProvider} from 'react-intl';
import {Divider, Select} from 'antd';
import ExamplePrimitiveValueWrapper from '../ExamplePrimitiveValueHoc';
import type {PrimitiveTypes} from '../types';
import RefId from 'canner-ref-id';

@ExamplePrimitiveValueWrapper()
class DatetimeDemo1 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>General date time picker</Divider>
          <Datetime
            refId={new RefId("input")}
            value={value}
            onChange={onChange}
            />
        </Fragment>
      </IntlProvider>
    );
  }
}

@ExamplePrimitiveValueWrapper()
class DatetimeDemo2 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Disabled time picker</Divider>
          <Datetime
            refId={new RefId("input")}
            disabled
            value={value}
            onChange={onChange}
            />
        </Fragment>
      </IntlProvider>
    );
  }
}

@ExamplePrimitiveValueWrapper()
class DatetimeDemo3 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Ouput timestamp seconds</Divider>
          <Datetime
            refId={new RefId("input")}
            value={value}
            onChange={onChange}
            uiParams={{
              output: 'timestamp.seconds'
            }}
          />
        </Fragment>
      </IntlProvider>
    );
  }
}

@ExamplePrimitiveValueWrapper()
class DatetimeDemo4 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Ouput epoch</Divider>
          <Datetime
            refId={new RefId("input")}
            value={value}
            onChange={onChange}
            uiParams={{
              output: 'epoch'
            }}
          />
        </Fragment>
      </IntlProvider>
    );
  }
}

@ExamplePrimitiveValueWrapper()
class DatetimeDemo5 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Ouput timestamp milliseconds</Divider>
          <Datetime
            refId={new RefId("input")}
            value={value}
            onChange={onChange}
            uiParams={{
              output: 'timestamp.milliseconds'
            }}
          />
        </Fragment>
      </IntlProvider>
    );
  }
}

const Option = Select.Option;

@ExamplePrimitiveValueWrapper('2018-12-21T06:26:42.169Z')
class DatetimeDemo6 extends Component<PrimitiveTypes<string>> {
  state = {
    timezone: 'Europe/Paris'
  }
  onSelect = (v) => {
    this.setState({
      timezone: v
    });
  }

  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Ouput with timezone</Divider>
          <Datetime
            refId={new RefId("input")}
            value={value}
            onChange={onChange}
            uiParams={{
              timezone: this.state.timezone,
              format: 'YYYY/MM/DD hh:mm',
              showTime: true
            }}
          />
          <Select onSelect={this.onSelect} value={this.state.timezone}>
            <Option value="Europe/Paris">Europe/Paris</Option>
            <Option value="Asia/Taipei">Asia/Taipei</Option>
          </Select>
        </Fragment>
      </IntlProvider>
    );
  }
}

export default class Demo extends React.Component<{}> {
  render() {
    return (
      <Fragment>
        <DatetimeDemo1/>
        <DatetimeDemo2/>
        <DatetimeDemo3/>
        <DatetimeDemo4/>
        <DatetimeDemo5/>
        <DatetimeDemo6/>
      </Fragment>
    )
  }
}