import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
            <section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About</span>
										<h2 className="colorlib-heading">Who Am I?</h2>
										<p><strong>Hi I'm Jack Hoang</strong> I am a second year Software Development student studying at Sheridan College. I have a passion and curiosity about IT research, software development, healthcare, and startups. </p>
										<p>I have started this as a project to gather my ideas, thoughts, projects and achievements, and use this as a way to display to my growth over the next couple of years.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
				<br /><br />
                <div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">What I do?</span>
							<h2 className="colorlib-heading">Here are some of my skills</h2>
						</div>
					</div>
					<div className="row row-pt-md">
						<div className="col-md-4 text-center animate-box">
							<div className="services color-2">
								<span className="icon">
									<i className="icon-data"></i>
								</span>
								<div className="desc">
									<h3>Technical</h3>
									<p>Java, SQL, Oracle, React, Linux Command Line, HTML/CSS/Javascript </p>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center animate-box">
							<div className="services color-4">
								<span className="icon">
									<i className="icon-layers2"></i>
								</span>
								<div className="desc">
									<h3>Soft</h3>
									<p>Communication, Critical Thinking/Problem Solving, Research, Analysis, Interpersonal </p>
								</div>
							</div>
						</div>
						<div className="col-md-4 text-center animate-box">
							<div className="services color-5">
								<span className="icon">
									<i className="icon-data"></i>
								</span>
								<div className="desc">
									<h3>Software</h3>
									<p>Microsoft Office, Visio, Project, Visual Studio Code, Github, Toad </p>
								</div>
							</div>
						</div>
					</div>
                </div>
			</section>
    
        </div>
        )
    }
}