import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homepageReducer from "./features/PersonalHomepage/homepageSlice";
import toggleTheme from "./features/PersonalHomepage/ThemeSwitcher/themeSwitcherSlice";
import  rootSaga  from "./core/App/rootSaga.js";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        homepage: homepageReducer,
        theme: toggleTheme
    },
    middleware: [sagaMiddleware],
});

//getRepos().then(ZMIENNA => console.log(ZMIENNA));

sagaMiddleware.run(rootSaga)
export default store;