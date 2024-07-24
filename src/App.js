import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import MainPage from "./page/MainPage";
import TeamPage from "./page/TeamPage";
import ResultPage from "./page/ResultPage";
import HelpPage from "./page/HelpPage";

function App() {
  return (
      <>
        <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/Main" />} />
              <Route path="/Main" element={<MainPage/>}/>
              <Route path="/Team" element={<TeamPage/>}/>
              <Route path="/Result" element={<ResultPage/>}/>
              <Route path="/Help" element={<HelpPage/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
