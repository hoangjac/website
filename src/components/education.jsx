import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box">Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Diploma in Software Development
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Currently, I am a third-year student at Sheridan College studying Software Development and Network Engineering (Co-op). My goal
                                                    is to learn best software development practices and apply them to real world scenarios to help scale products.
												</p>
                                                    <ul>
                                                        <li>Current cGPA: 3.9</li>
                                                        <li>Enrolled in programming, software and web application development courses – C#/.NET, Java, Software Process Manager 
                                                            (Git, Jenkins), Database Management, Mobile Web Development, etc.
														</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Bachelor's of Commerce - Business Technology Management
									            </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div class="panel-body">
                                                    <p>I have completed my Bachelor's of Commerce in Business Technology Management from Ryerson University
                                                    in 2016. During my time at Ryerson, I developed an interest for technology research, data analysis,
                                                    and startups. These interests helped me improve my problem solving, critical thinking, and communication
                                                    skills.
												</p>
                                                    <ul>
                                                        <li>cGPA: 3.82</li>
                                                        <li>Taken courses in Business Analytics, Statistics, Linear Algebra, and Project Management</li>
                                                        <li>Recipient of academic and volunteering awards in 2013, 2014, 2015</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}