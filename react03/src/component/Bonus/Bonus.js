import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Wechat from "./Wechat/Wechat";

const Bonus = (props) => {
    let { path, url } = useRouteMatch();

    return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Wechat />
          </Route>
        </Switch>
      </div>
    );
}

export default Bonus;