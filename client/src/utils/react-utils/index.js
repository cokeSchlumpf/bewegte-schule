import _ from 'lodash';

export const onFormValueChangeHandler = (value, onValueChange) => (field) => (event, data) => {
  onValueChange(_.assign({}, value, {
    [field]: data.value
  }));
};