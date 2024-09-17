import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Second from "./pages/second";

export default function Navegacao(){

    return(

        <BrowserRouter>
        <Routes>

          <Route path='/' element={ <Inicio /> } />
          <Route path='/second' element={ <Second /> } />

        </Routes>
      </BrowserRouter>

    );

}