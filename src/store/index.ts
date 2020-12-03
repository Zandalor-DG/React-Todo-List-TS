import { createStore } from 'redux';
import reducers from './reducers';

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, devTools);

export default store;
