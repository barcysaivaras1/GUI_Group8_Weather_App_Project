import { FilterPage } from './Filter-Page/Filter.jsx';
import BasePage from './basepage.js';
import NewWeatherSearchPage from './components/Search-Page/Search-page.js';
import Favourites from './FavouritesPage/Favourites.js';
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
              <Route path="/favourites" exact element={<Favourites />}/>
              <Route path="/search" exact element={<NewWeatherSearchPage />}/>
              <Route path="/filter" exact element={<FilterPage />}/>
              <Route path="/filter/results" element={<ResultsPage />}/>
            </Routes>
          </Router>
        </div>
      );
}