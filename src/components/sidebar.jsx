import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                        data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i />
                    </nav>

                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/me.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Jack Hoang</a></h1>
                            <span className="position">Developer/Research/Tech
					                <br />
						            Toronto, ON
				                </span>
                        </div>

                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li class="active"><a href="#" data-nav-section="home">Home</a></li>
                                    <li><a href="#" data-nav-section="about">About</a></li>
                                    <li><a href="#" data-nav-section="education">Education</a></li>
                                    <li><a href="#" data-nav-section="experience">Experience</a></li>
                                    <li><a href="#" data-nav-section="work">Projects</a></li>
                                    <li></li>
                                </ul>
                            </div>
                        </nav>

                        <nav id="colorlib-main-menu">
                            <ul>
                                <li className="social"><a href="https://github.com/hoangjac/projects" target="_blank" rel="noopener noreferrer"><i class="icon-github" /></a></li>
                                <li className="social"><a href="https://www.linkedin.com/in/jackhoang1/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                <li className="social"><a href="https://www.instagram.com/jackhoang/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                                <li className="social"><a href="https://www.facebook.com/jakhoang" target="_blank" rel="noopener noreferrer"><i class="icon-facebook22" /></a></li>
                            </ul>
                        </nav><br />

                        <div class="colorlib-footer">
                            <p><small>
                                &copy; {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/*Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}
