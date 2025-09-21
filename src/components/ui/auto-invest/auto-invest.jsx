import React from 'react';
import { Accordion } from 'react-bootstrap';
import "./auto-invest.scss"

import InvestmentChart  from "../invest-chart/invest-chart"

import chartInvest from "../../../assets/images/chart-invest.svg"
import chartRisk from "../../../assets/images/risk-chart.svg"

const AutoInvest = () => {
    return (
        <>
            <div className="auto-container">
                <div className="auto-invest-top">
                    <div className="auto-left-box">
                        <div className="innerRoundedBox">
                            <h5>Conservative</h5>

                            <h4>10-14%</h4>

                            <h6>Interest Rate</h6>
                        </div>
                    </div>

                    <div className="auto-right-box">
                        <div className="account-status">
                            <div className="account-status-info">
                                <h4 className="active">Active</h4>
                                <p>Status</p>
                            </div>
                            
                            <div className="account-status-info">
                                <h4 className="">1500 SAR</h4>
                                <p>Max. Investement</p>
                            </div>
                            
                            <div className="account-status-info">
                                <h4 className="">26</h4>
                                <p>Loans Funded</p>
                            </div>
                        </div>

                        <div className="account-settings">
                            <p>* Strategy started at 20th March 2021</p>

                            <div className="btn-group">
                                <button className="btn btn-stop">
                                    Stop
                                </button>
                                
                                <button className="btn btn-Secondary">
                                    Change Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chartGroup">
                    <div className="invested-chart chart">
                        <div className="chart-title">
                            <h3>Invested</h3>

                            <div className="icon">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.1" width="16" height="16" rx="8" fill="#0D0F52"/>
                                    <path d="M6 7V6C6 4.89543 6.89543 4 8 4V4C9.10457 4 10 4.89543 10 6V7.5C10 8.05228 9.55228 8.5 9 8.5V8.5C8.44772 8.5 8 8.94772 8 9.5V10" stroke="white" stroke-width="2"/>
                                    <path d="M8 11L8 13" stroke="white" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>

                        <div className="chart-place">
                            <img src={chartInvest} alt="" />

                            <div className="chart-labels">
                                <div className="text-labels">
                                    <div className="dot dark"></div>
                                    <div className="label">
                                        Spent
                                    </div>
                                </div>
                                
                                <div className="text-labels">
                                    <div className="dot light"></div>
                                    <div className="label">
                                        Excepted
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="risk-chart chart">
                        <div className="chart-title">
                            <h3>
                                Excepted Risk Score Distribution
                            </h3>
                        </div>

                        <div className="chart-place risk">
                            <div>
                                <img src={chartRisk} alt="" />
                            </div>

                            <div className="chart-labels ">
                                <div className="text-labels">
                                    <div className="dot blue"></div>
                                    <div className="label">A - 45.7%</div>
                                </div>
                                
                                <div className="text-labels">
                                    <div className="dot sky"></div>
                                    <div className="label">B - 51.5%</div>
                                </div>
                                
                                <div className="text-labels">
                                    <div className="dot yellow"></div>
                                    <div className="label">C - 23.2%</div>
                                </div>
                                
                                <div className="text-labels">
                                    <div className="dot red"></div>
                                    <div className="label">D - 51.5%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info-about-us">
                    <h3>You Might Want to Know</h3>

                    <div className="about-info">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Why should I trust this tool?
                                </Accordion.Header>

                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    What risks are related to investments?
                                </Accordion.Header>

                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    What is the Auto-Investment?
                                </Accordion.Header>

                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AutoInvest