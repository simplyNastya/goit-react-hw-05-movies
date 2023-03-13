import { BrowserRouter } from 'react-router-dom';

import Navbar from './Navbar/Navbar';

import UserRoutes from 'services/userRoutes';

export const App = () => {
  return (
    <div className="container">
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </div>
  );
};
