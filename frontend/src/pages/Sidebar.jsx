import React, { useState } from 'react';
import Home from './Home';

const Sidebar = () => {
  const [showType, setShowType] = useState('table');

  return (
    <div className='sidebar'>
      {/* Other sidebar items */}
      <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={() => setShowType('table')}
      >
        Table
      </button>
      <button
        className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
        onClick={() => setShowType('card')}
      >
        Card
      </button>
      <Home showType={showType} setShowType={setShowType} />
    </div>
  );
};

export default Sidebar;
