import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import About from '../pages/About';
import Create from '../pages/Create';
import SingleRecipe from '../pages/SingleRecipe';
import PageNotFound from '../pages/PageNotFound';
import Fav from '../pages/Fav';
const Mainroutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/recepies" element={<Recipes />} />

      <Route path="/recepies/details/:id" element={<SingleRecipe />}></Route>

      <Route path="/FAV" element={<Fav/>} />
      
      <Route path="/create-recepie" element={<Create />} />

      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound/>} />

    </Routes>
  );
};

export default Mainroutes;
