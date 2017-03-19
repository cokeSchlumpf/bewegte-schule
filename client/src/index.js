import 'semantic-ui-css/semantic.min.css';

import { IntlProvider, addLocaleData } from 'react-intl';

import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { browserHistory } from 'react-router';
import en from 'react-intl/locale-data/en';
import enMessages from './resources/i18n/en.json'
import flattenObject from './utils/flatten-object';
import store from './redux/store';

addLocaleData([ ...en ]);

const messages = {
  en: flattenObject(enMessages)
}

const isoCode = navigator.language || navigator.userLanguage;
const language = isoCode.substring(0, 2);

ReactDOM.render(
    <Provider store={ store }>
      <IntlProvider defaultLocale='en' locale={ language } messages={ messages[language] }>
        <Routes history={ browserHistory } />
      </IntlProvider>
    </Provider>,
    document.getElementById('root')
);
