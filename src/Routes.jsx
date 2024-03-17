import { FilterPage } from './Filter-Page/Filter.jsx';
import BasePage from './basepage.js';
import { ResultsPage } from './Filter-Page/Results.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export const AppRoute = () =>{
    return(
        <div>
          <Router>
            <Routes>
              <Route path="/" exact element={<BasePage />}/>
              <Route path="/filter" exact element={<FilterPage />}/>
              <Route path="/filter/results" element={<ResultsPage />}/>
            </Routes>
          </Router>
        </div>
      );
}