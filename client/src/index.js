import 'semantic-ui-css/semantic.min.css';
import './styles.css';

import { Dimmer, Loader } from 'semantic-ui-react';
import { IntlProvider, addLocaleData } from 'react-intl';

import { AuthWrapper } from './components/Auth';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import en from 'react-intl/locale-data/en';
import enMessages from './resources/i18n/en.json'
import flattenObject from './utils/flatten-object';
import store from './redux/store';

addLocaleData([...en]);

const messages = {
  en: flattenObject(enMessages)
}

const isoCode = navigator.language || navigator.userLanguage;
const language = isoCode.substring(0, 2);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider defaultLocale='en' locale={language} messages={messages[language]}>
      <AuthWrapper store={store} loader={<Dimmer inverted active={true}><Loader /></Dimmer>}>
        <Routes />
      </AuthWrapper>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
