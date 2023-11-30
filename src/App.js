import { Outlet } from 'react-router';

import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <>
       <Header/>
       <Outlet/>
       <Footer/>
    </>
  );
}

export default App;
