import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./input.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";
import reducer from "./reducers/reducers";
import { ChakraProvider } from "@chakra-ui/react";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
