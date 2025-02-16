import './utils/styles/global.scss'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {datas} from './utils/scripts/generateQuestions.ts'

// components
import Nav from './components/nav/Nav.tsx'

// views
import NormesParametresVitaux from "./views/normes_parametres_vitaux/NormesParametresVitaux.tsx";
import CheatSheet from "./components/cheatSheet/CheatSheet.tsx";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path={"/"}
            element={<CheatSheet datas={datas} />}
          />
            <Route path={'/quiz'} element={<NormesParametresVitaux />} />
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
