import { createStore } from 'redux';
import { tipReducer } from './BillReducer';

const store = createStore(tipReducer);

export default store;
