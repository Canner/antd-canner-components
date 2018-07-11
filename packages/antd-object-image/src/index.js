// @flow
import React, { PureComponent } from "react";
import ShowImage from "./image/ShowImage";
import EditImage from "@canner/image-upload";
import defaultMessage from '@canner/antd-locales';
import {isArray} from 'lodash';
import { Button } from "antd";
import {FormattedMessage} from "react-intl";
import type ImageServiceConfig from "@canner/image-service-config/lib/imageService";

// type
import type {ObjectDefaultProps} from 'types/ObjectDefaultProps';

type Props = ObjectDefaultProps & {
  uiParams: {
    service: string,
    dir: string,
    filename: string
  },
  disabled: boolean,
  imageServiceConfig: ImageServiceConfig,
};

type State = {
  editPopup: boolean
};

export default class Image extends PureComponent<Props, State> {
  state = {
    editPopup: false
  };

  componentWillReceiveProps(nextProps: Props) {
    // if value exist, hide edit popup
    if (nextProps.value.get('url')) {
      this.setState({
        editPopup: false
      });
    }
  }

  showEditPopup = () => {
    this.setState({
      editPopup: true
    });
  };

  closeEditPopup = () => {
    this.setState({
      editPopup: false
    });
  };

  onChange = (newValue: Array<string> | string) => {
    const {value} = this.props;
    let url = newValue;
    if (isArray(newValue)) {
      url = newValue[0];
    }
    this.props.onChange(this.props.refId, "update", value.set('url', url));
  };

  render() {
    const { value, disabled, imageServiceConfig } = this.props;
    const { editPopup } = this.state;
    // if the image exist show it, otherwise let user upload.
    if (value && value.get('url')) {
      return (
        <ShowImage
          onChange={this.onChange}
          value={(value: any).get('url')}
          disabled={disabled}/>
      );
    }

    return (
      <div>
        <Button type="primary" onClick={this.showEditPopup} disabled={disabled}>
          + <FormattedMessage id="string.image.add" defaultMessage={defaultMessage.en["string.image.add"]}/>
        </Button>
        <EditImage
          onChange={this.onChange}
          editPopup={editPopup}
          serviceConfig={imageServiceConfig}
          closeEditPopup={this.closeEditPopup}
          multiple={false}
        />
      </div>
    );
  }
}
