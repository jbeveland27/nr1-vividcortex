import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'nr1';
import VCHostSelector from './vcHostSelector';
import SetupUserToken from './setup';

export default class ConfigModal extends React.PureComponent {
  static propTypes = {
    vcHosts: PropTypes.array,
    osHost: PropTypes.object,
    userToken: PropTypes.string.isRequired,
    entityGuid: PropTypes.string.isRequired,
    entity: PropTypes.object.isRequired,
    callbacks: PropTypes.object.isRequired,
    openConfig: PropTypes.bool
  };

  render() {
    return (
      <Modal
        hidden={!this.props.openConfig}
        onClose={() => {
          this.props.callbacks.closeConfig();
        }}
      >
        <SetupUserToken {...this.props} hideButton={true} />
        <VCHostSelector {...this.props} />
      </Modal>
    );
  }
}
