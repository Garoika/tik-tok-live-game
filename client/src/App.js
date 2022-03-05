import React from 'react';
import { useRoutes } from './routes';


function App() {
  const routes = useRoutes(false)

  return (
    <div>
      <div className='container'>
        <div>{routes}</div>
      </div>
    </div>
  );
}

export default App;