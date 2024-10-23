import React from 'react';
import { Provider } from 'react-redux';
import DashBoardScreen from './Screens/DashBoardScreen';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <DashBoardScreen />
    </Provider>
  );
};

export default App;
