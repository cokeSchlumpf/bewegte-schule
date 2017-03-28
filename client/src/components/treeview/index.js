import './styles.css';

import React, { PropTypes } from 'react';

import { List as ImmutableList } from 'immutable';
import { List } from 'semantic-ui-react'
import _ from 'lodash';
import cx from 'classnames';
import noop from '../../utils/noop';

const renderChildren = (items, onChangeValue = noop, onSelect = noop) => {  
  const handleOnChangeValue = (idx) => (item) => {
    const newChildren = (ImmutableList(items)).toJS();
    newChildren.splice(idx, 1, item);
    onChangeValue(newChildren);
  };

  return (
    <List.List>
      { _.map(items, (item, idx) => renderItem(item, handleOnChangeValue(idx), onSelect)) }
    </List.List>
  );
}

const renderItemIcon = (item) => {
  let iconname;

  if (item.icon) {
    iconname = item.icon;
  } else if (!_.isArray(item.children)) {
    iconname = 'file text outline';
  } else {
    if (item.collapsed) {
      iconname = 'folder';
    } else {
      iconname = 'folder open'
    }
  }

  return <List.Icon name={ iconname } />;
}

const renderItem = (item, onChangeValue = noop, onSelect = noop) => {
  const isLeaf = !_.isArray(item.children);
  
  const className = cx({
    [item.className]: true,
    'treeview-item': true,
    'treeview-item-selected': item.selected
  });

  const handleOnClick = (event) => {
    if (isLeaf) {
      onChangeValue(_.assign({}, item, {
        selected: !item.selected
      }));
    } else {
      onChangeValue(_.assign({}, item, {
        collapsed: !item.collapsed
      }));
    }

    event.stopPropagation();
  }

  const handleOnChangeValue = (children) => {
    onChangeValue(_.assign({}, item, {
      children: children
    }));
  }

  return (
    <List.Item key={ item.id || item.title } className={ className } onClick={ handleOnClick }>
      { renderItemIcon(item) }
      <List.Content>
        <List.Description>{item.title}</List.Description>
        { !isLeaf && !item.collapsed && renderChildren(item.children, handleOnChangeValue, onSelect) }
      </List.Content>
    </List.Item>
  );
}

const TreeView = ({ value, onChangeValue = noop }) => {
  return (
    <List>
      { renderItem(value, onChangeValue) }
    </List>
  );
}

export default TreeView;