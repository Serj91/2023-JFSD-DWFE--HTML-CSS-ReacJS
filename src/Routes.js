import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import About from "./components/About/About.js";
import ContactUs from "./components/ContacUs/ContactUs.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";






const routes = [
    { path:'/', element:<Home />},
    { path:'Productos', element:<Products />},
    { path:'Sobre nosotros', element:<About />},
    { path:'Contacto', element:<ContactUs />},
    { path:'/*', element:<NotFound />},
];

export default routes;