import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import About from '../pages/About';
import Create from '../pages/Create';
import SingleRecipe from '../pages/SingleRecipe';
import UpdateRecipe from '../components/UpdateRecipe';

const Mainroutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/recepies" element={<Recipes />} />

      <Route path="/recepies/details/:id" element={<SingleRecipe />}>

        <Route path="update" element={<UpdateRecipe />} />

      </Route>

      <Route path="/create-recepie" element={<Create />} />

      <Route path="/about" element={<About />} />

    </Routes>
  );
};

export default Mainroutes;
