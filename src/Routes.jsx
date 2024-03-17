import { FilterPage } from './Filter-Page/Filter.jsx';
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
              <Route path="/" exact element={<FilterPage />}/>
              <Route path="/results" element={<ResultsPage />}/>
            </Routes>
          </Router>
        </div>
      );
}