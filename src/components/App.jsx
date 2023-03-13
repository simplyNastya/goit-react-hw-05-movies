import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import UserRoutes from 'services/userRoutes';

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </div>
  );
};
