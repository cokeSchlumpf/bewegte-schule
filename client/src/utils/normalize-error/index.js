import _ from 'lodash';

export default (error) => {
  console.log(error);
  const fault = _.get(error, 'Fault.detail.WebServiceFault.faults.fault');

  let normalizedError;

  if (fault) {
    normalizedError = {
      message: fault.message,
      messageKey: `errors.rgf.${fault.code}`,
      parameters: fault.parameters
    }
  } else {
    normalizedError = {
      message: error.message,
      messageKey: error.messageKey || 'internal-application-error',
      parameters: error.parameters || {}
    }
  }

  return normalizedError;
}