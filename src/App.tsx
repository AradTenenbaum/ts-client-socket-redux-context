import React from 'react';
import { Provider } from 'react-redux';
import { TemplateProvider } from './context/TemplateContext';
import { store } from './redux/store';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TemplateProvider>
          <Routes/>
        </TemplateProvider>
      </Provider>
    </div>
  );
}

export default App;
