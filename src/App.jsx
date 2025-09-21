import React, { useState } from 'react';
import Avatar from "./assets/images/avatar.svg"
import Sidebar from "./components/common/sidebar/sidebar"
import AutoInvest from './components/ui/auto-invest/auto-invest';

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('auto-invest');

  return (
    <>
      <div className="main-project">
        <div className="aside">
          <Sidebar />
        </div>

        <div className="dashboard">
          <div className="header">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'invest' ? 'active' : ''}`}
                  onClick={() => setActiveTab('invest')}
                >
                  Invest
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'auto-invest' ? 'active' : ''}`}
                  onClick={() => setActiveTab('auto-invest')}
                >
                  Auto-Invest
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'portfolio' ? 'active' : ''}`}
                  onClick={() => setActiveTab('portfolio')}
                >
                  My Portfolio
                </button>
              </li>
            </ul>

            <div className="settings">
              <div className="language">
                <button className='btn btn-lang'>En</button>
              </div>

              <div className="notification">
                  <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="3" y1="19.9048" x2="21" y2="19.9048" stroke="#A4A6BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5 19.8572V11.1429C5 7.27689 8.13401 4.14288 12 4.14288V4.14288C15.866 4.14288 19 7.27689 19 11.1429V19.8572" stroke="#A4A6BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13 23L11 23" stroke="#A4A6BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 4.14286L12 1" stroke="#A4A6BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div className="notification-count">2</div>
              </div>

              <div className="avatar">
                <img src={Avatar} alt="" />
              </div>
            </div>
          </div>

          <div className="content-dashboard">
            <div className="tab-content mt-3">
              {activeTab === 'overview' && <div className="tab-pane active">Overview Content</div>}
              {activeTab === 'invest' && <div className="tab-pane active">Invest Content</div>}
              {activeTab === 'auto-invest' && <div className="tab-pane active"><AutoInvest /></div>}
              {activeTab === 'portfolio' && <div className="tab-pane active">My Portfolio Content</div>}
            </div>
          </div>
            
        </div>
      </div>
    </>
  )
}

export default App
