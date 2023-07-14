import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./App";
import common_en from "./translations/en/common";
import common_vi from "./translations/vi/common";
import { Provider } from "react-redux";
import { store } from "./redux/store";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "vi",
  resources: {
    en: {
      common: common_en,
    },
    vi: {
      common: common_vi,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
