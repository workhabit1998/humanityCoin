import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import { InternetConnectionWraper } from './Components/internetConnectionWraper';
import 'antd/dist/antd.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persister, store } from './redux/store';
import Web3ModalWrapper from './web3ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <InternetConnectionWraper>
          <Web3ModalWrapper>
            <App />
          </Web3ModalWrapper>
        </InternetConnectionWraper>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
