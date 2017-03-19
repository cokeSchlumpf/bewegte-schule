import './styles.css';

import { Button, Input, Menu } from 'semantic-ui-react'
import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import noop from '../../utils/noop';

const ProjectSelection = ({ repositorytype = 'github', value = '', onClickLoad = noop, onChangeRepositorytype = noop, onChangeValue = noop }, { intl }) => {
  const valuePlaceholder = intl.formatMessage({
    id: `projectselection.placeholder-${repositorytype}`
  });

  const onClickMenuItem = (event, menuItemProps) => {
    if (!menuItemProps.name.active) {
      onChangeRepositorytype(menuItemProps.name);
    }
  };

  return (
    <Menu attached="top">
      <Menu.Item name="github" active={repositorytype === 'github'} onClick={onClickMenuItem}>
        <FormattedMessage id="projectselection.github" />
      </Menu.Item>

      <Menu.Item name="local" active={repositorytype === 'local'} onClick={onClickMenuItem}>
        <FormattedMessage id="projectselection.local" />
      </Menu.Item>

      <Menu.Menu>
        <Input
          className="projectselection-value"
          iconPosition="left"
          icon="git square"
          placeholder={valuePlaceholder}
          value={value}
          onChange={onChangeValue} />
      </Menu.Menu>

      <Menu.Menu position="right">
        <Button className="projectionselection-button" primary onClick={ onClickLoad } disabled={ value.length === 0 }>
          <FormattedMessage id="projectselection.load" />
        </Button>
      </Menu.Menu>
    </Menu>
  );
};

ProjectSelection.contextTypes = {
  intl: PropTypes.object
};

ProjectSelection.propTypes = {
  value: PropTypes.string,
  repositorytype: PropTypes.oneOf(['github', 'local']),

  onChangeRepositorytype: PropTypes.func,
  onChangeValue: PropTypes.func,
  onClickLoad: PropTypes.func
}

export default ProjectSelection;