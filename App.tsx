import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import EntertainmentComponent from './components/EntertainmentComponent';

function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'entertainment'>('map');

  return (
    <div className="app">
      <header className="header">
        <h1>车载系统</h1>
        <nav className="nav">
          <button 
            className={activeTab === 'map' ? 'active' : ''}
            onClick={() => setActiveTab('map')}
          >
            路径规划
          </button>
          <button 
            className={activeTab === 'entertainment' ? 'active' : ''}
            onClick={() => setActiveTab('entertainment')}
          >
            娱乐项目
          </button>
        </nav>
      </header>
      <main className="content">
        {activeTab === 'map' ? <MapComponent /> : <EntertainmentComponent />}
      </main>
    </div>
  );
}

export default App;