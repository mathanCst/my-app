import React from 'react';
//import { render } from "react-dom"
import { createStore, applyMiddleware, Store} from "redux"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import reducer from "./store/reducer"

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

// const reducer = combineReducers({
//   counter: counter.reducer,
//   user: user.reducer,
// })
// const store1 = configureStore({
//   reducer,
//   middleware: applyMiddleware(thunk),)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <App />
</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
