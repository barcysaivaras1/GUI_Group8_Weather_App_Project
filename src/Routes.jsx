import { FilterPage } from './components/Filter-Page/Filter.jsx';
import BasePage from './components/base-page/basepage.js';
import NewWeatherSearchPage from './components/Search-Page/Search-page.js';
import Favourites from './components/FavouritesPage/Favourites.js';
import { ResultsPage } from './components/Filter-Page/Results.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import BasePage_alt from './components/base-page/basepage_alt.js';


export const AppRoute = () =>{
    return (
      //This function carries out all the routing between the pages and organises
      //them in a file directory manner.
      //It imports all page components so that it can redirect them
        <div>
          <AnimatePresence>
            <Router>
              <Routes>
                <Route path="/" exact element={<BasePage/>}/>
                <Route path="/alt" exact element={<BasePage_alt/>}/>
                <Route path="/favourites" exact element={<Favourites />}/>
                <Route path="/search" exact element={<NewWeatherSearchPage />}/>
                <Route path="/filter" exact element={<FilterPage />}/>
                <Route path="/filter/results" element={<ResultsPage />}/>
              </Routes>
            </Router>
          </AnimatePresence>
        </div>
    );
}