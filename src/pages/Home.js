import React from "react";
import Header from "../components/Header";
import Banner from "./../assets/images/banner.png";
import "./../styles/pages/Home.css";



const Home = () => {

    return(
        <div className="home">
            <Header />
            <div className="home__banner">
                <img src={Banner} className="home__banner--img" />
                <p className="home__banner--text">Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}

export default Home;