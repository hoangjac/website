import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/IMG_0920.jpg)'}}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-10 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1 style={{color: "black", fontWeight: "bold"}}>Hi! <br />I'm Jack</h1>
                                                    <h2 style={{color: "black", fontWeight: "bold"}}>Take a look around to get to know me</h2>
                                                        <p><a className="btn btn-primary btn-learn" style={{ color: "black", fontWeight: "bold" }}
                                                            href="https://drive.google.com/file/d/1qPjNGxyTdqOpAKEFa4YEBvWv7uDl5G0I/view?usp=sharing"
                                                            target="_blank" rel="noopener noreferrer"> Download CV <i className="icon-download4" /></a></p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                                <li style={{ backgroundImage: 'url(images/IMG_0920.jpg)' }}>
                                    <div className="overlay"></div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-3 col-md-offset-10 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner">
                                                    <div className="desc">
                                                        <h1 style={{color: "black", fontWeight: "bold"}}>I am <br />a Software Development Student</h1>
                                                        <h2 style={{color: "black", fontWeight: "bold"}}>View some of my work below!</h2>
                                                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                                                            <p><a href="https://github.com/hoangjac" target="_blank" style={{ color: "black", fontWeight: "bold" }} rel="noopener noreferrer"
                                                                className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3" /></a></p>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                        </ul>
                    </div>
                </section>
            </div>

        );
    }
}

