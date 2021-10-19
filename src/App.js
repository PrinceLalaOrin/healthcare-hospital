
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import RoutingList from './pages/RoutingList/RoutingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Header></Header>
            <RoutingList></RoutingList>
             <br />
             <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
