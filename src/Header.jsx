import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import HeaderLinks from "./HeaderLinks";
import { useState } from "react";

function Header({barsClicked, setBarsClicked}){

    return(

        <div>

            <header className="Header-container">

            <div className="Header-links">
                   
                    <FaBars className="Bars" onClick={() => setBarsClicked(prevstate => !prevstate)}></FaBars>




            </div>


            </header>


            <HeaderLinks barsClicked={barsClicked}></HeaderLinks>


        </div>

    


    )

}

export default Header