import React, { PropTypes } from 'react';

import TreeView from '../treeview';

const ProjectTree = ({ value, onChangeValue }) => {
  return <TreeView value={ value } onChangeValue={ onChangeValue } />
}

export default ProjectTree;