import React from "react";
import "./Sass/App.scss";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import routes from "./config/routes";
import Header from "./components/Header";
import Filters from "./components/Filters";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Filters />
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) =>
                  route.redirect ? (
                    <Redirect to="/home" />
                  ) : (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )
                }
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
