//  import './App.css';
import './assets/styles/styles.scss'
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes.js'
import { NavBar } from './pages/NavBar';
import { Protfolio } from './pages/Protfolio';
import { AboutMe } from './cmps/AboutMe';
import { ProjList } from './cmps/ProjList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Protfolio />
    
      {/* <AboutMe/> */}
      <Switch>
        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
      </Switch>

    </div>
  );
}

export default App;
