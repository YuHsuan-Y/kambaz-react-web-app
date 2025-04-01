import Labs from "./Labs";
import Kambaz from "./Kambaz";
import store from "./Kambaz/store";
import {Provider} from "react-redux";
import {HashRouter, Route, Routes, Navigate} from "react-router-dom";

export default function App(){
  return(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kambaz" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}