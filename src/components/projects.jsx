import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="work">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Projects</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <a href="https://github.com/hoangjac/ruhacks" target="_blank" rel="noopener noreferrer">
                                    <div className="project" style={{ backgroundImage: 'url(images/project-image/trackio.jpg)' }}>
                                        <div className="desc">
                                            <div className="con">
                                                <h3>RU Hacks - Trackio</h3>
                                                <span>Xcode/Flutter - Mobile Dev</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <a href="pages/eCard.html" target="_blank" rel="noopener noreferrer">
                                    <div className="project" style={{ backgroundImage: 'url(images/project-image/eCard.jpg)' }}>
                                        <div className="desc">
                                            <div className="con">
                                                <h3>eCard Generator</h3>
                                                <span>HTML/Javascript</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <a href="pages/tictactoe.html" target="_blank" rel="noopener noreferrer" >
                                    <div className="project" style={{ backgroundImage: 'url(images/project-image/tictactoe.png)' }}>
                                        <div className="desc">
                                            <div className="con">
                                                <h3>Tic Tac Toe</h3>
                                                <span>HTML/Javascript</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                            <a href="https://github.com/hoangjac/projects/tree/master/PizzaShop" target="_blank" rel="noopener noreferrer">
                                <div className="project" style={{ backgroundImage: 'url(images/project-image/pizza.png)' }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3>Pizza Order</h3>
                                            <span>Java EE</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}