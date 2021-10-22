import React from "react";
import "./Sass/App.scss";
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import routes from "./config/routes";
import { Container, Nav, Navbar } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/liquidity">Liquidity</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/liquidity">Liquidity</Link>
              </li>
            </ul>
          </nav> */}

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
        {/* </div> */}
      </BrowserRouter>
    </>
  );
};

export default App;
