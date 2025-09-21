import React from "react";
import TrustImage from "../../../assets/images/trust-img.svg"
import "./sidebar.scss"

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="topBox">
                    <div className="innerRoundedBox">
                        <h5>Conservative</h5>

                        <h4>10-14%</h4>

                        <h6>Interest Rate</h6>
                    </div>
                </div>

                <div className="deposit-withdraw">
                    <hr />

                    <div className="acc-balance">
                        <div className="icon">
                            <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="9" y="14" width="38" height="28" rx="1" stroke="#2D91FE" stroke-width="2"/>
                                <path d="M32 14L24.3287 7.18109C23.571 6.50752 22.429 6.50752 21.6713 7.18109L14 14" stroke="#2D91FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M42 24H38C36.8954 24 36 24.8954 36 26V30C36 31.1046 36.8954 32 38 32H42" stroke="#2D91FE" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>

                        <div className="balance-dv">
                            <h4>62,540 SAR</h4>
                            <div className="account-dv">
                                <h5>Account Balance</h5>
                                <div className="chevron-right">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <path d="M6.39999 4L10.4 8L6.39999 12" stroke="#0D0F52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="btn-group">
                        <a className="btn btn-primary" href="#">
                            Deposit
                        </a>

                        <a href="#" className="btn btn-secondary">
                            Withdraw
                        </a>
                    </div>

                    <div className="note-dv">
                        <div className="icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <rect x="0.5" y="0.5" width="19" height="19" fill="white"/>
                                    <rect x="0.5" y="0.5" width="19" height="19" stroke="black"/>
                                    <circle cx="10" cy="10" r="9" stroke="#0D0F52" stroke-width="2"/>
                                    <rect x="9.00049" y="4.00067" width="2" height="8" rx="1" fill="#0D0F52"/>
                                    <rect x="9.00049" y="13.0005" width="2" height="2" rx="1" fill="#0D0F52"/>
                                </g>
                            </svg>
                        </div>

                        <h3>
                            To withdraw more than <b>10,000 
                            SAR</b> you need to <b>verify</b> your 
                            banking account.
                        </h3>
                    </div>
                    
                    <hr />
                </div>

                <div className="trust-dv">
                    <div className="trust-image">
                        <img src={TrustImage} alt="" />
                    </div>

                    <h3>Why Should You Trust It?</h3>

                    <p>
                        Because of this and that. 
                        Anyway investing is very good
                    </p>
                </div>
            </div>
        </>
    );
}

export default Sidebar