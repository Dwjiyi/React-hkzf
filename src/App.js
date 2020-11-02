import { Button } from 'antd-mobile'

import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

import CityList from './pages/CityList';
import Home from './pages/Home';


function App() {

  return (

    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/home">主页</Link>
          </li>
          <li>
            <Link to="/citylist">城市选择</Link>
          </li>
        </ul>

        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />

      </div>
    </Router>

  );
}

export default App;
