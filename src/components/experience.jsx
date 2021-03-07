import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Experience</span>
                                <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Quality Engineer<span>Sept 2020 - Dec 2020</span> <br />RBC</h2>
                                                <p>RBC is one of Canada's largest financial services company and largest bank by market capitalization. The bank servers over 16 million clients worldwide.</p>
                                                <p>As a Quality Engineer, my responsibilities were to help design and develop internal testing tools to help with data masking and downtime tracking. 
                                                    I helped developed applications in C# and .NET. In addition, I helped with extracting, transforming, and loading data from Excel into SQL Server Databases. 
                                                    Other software tools I utilized includes Visio and Visual Paradigm to help with database design and mapping entity-relations.
                                                </p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Database Administrator<span>May 2019 - Sept 2020</span> <br />Enbridge Inc.</h2>
                                                <p>Enbridge is a North American leader in delivering energy and has been ranked on the Global 100 Most Sustainable Corporations index for the past eight years.</p>
                                                <p>As a Database Administrator, my responsiblities include trouble shooting databases, refreshing environments, monitoring and analyzing databases, and provide support
                                                    services to customers who work with our databases. 
                                                </p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Data Intern<span>Jan 2020 - June 2016</span> <br />Startup Blink</h2>
                                                <p>Startup Blink is a comprehensive startup ecosystem map and research center.</p>
                                                <p>At Start Blink, I help with research and data analysis. My passion for learning about startups and technology have allowed me to contribute to startup ecosystem
                                                reports and discovering innovations to be mapped. We are currently in the process of releasing our 2020 Annual Startup Ecosystem Report.
                                                </p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Research Assistant <span>June 2018 - Dec 2019</span><br />Ryerson University</h2>
                                                <p>Ryerson University is a public research university and is Canada’s leader in innovative, career-oriented education</p>
                                                <p>As a Research Assistant, my focus was on IT adoption and affordances. My responsibilities include qualitative and quantitative analysis, 
                                                    and creating metrics to code raw data for analysis. I am currently in the process of discovering how affordances affect IT adoption for students in the classroom.
                                                </p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2"></i>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Technology Research Lead<span>Nov 2016 - May 2018</span> <br /> Connectiv Innovation</h2>
                                                <p>Connectiv Innovation was founded to help Canadian organizations deliver technology-infused innovation while de-risking investment.</p>
                                                <p>My role at Connectiv Innovation allowed me to research into the Canadian Startup Ecosystem. I was responsibile for research and 
                                                    documentation of new and emegering technologies. In addition, I consulted clients to help them grow their startups.</p>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}