import { UIButton, UIInput } from "../ui-elements";
import { useLocationHook } from "../../hooks/useLocationHook";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = ({ value, setSearch, handleOpenAddMovieDialog }) => {
  const { length } = useLocationHook();
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white"  href="/">Movie Search App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-white" href="/">
                All Movies
              </Nav.Link>
              <Nav.Link className="text-white" href="/favorite-movies">
                Favorite Movies
              </Nav.Link>
            </Nav>
            <span>Now Listed Movies: {length}</span>

            <div className="d-flex">
              <UIButton
                text="Add Movie"
                onClick={handleOpenAddMovieDialog}
                color="secondary"
                className="mb-4"
              />
              <UIInput
                className="form-control me-2"
                type="search"
                placeholder="Find a movie"
                aria-label="Search"
                value={value}
                onChange={(event) => setSearch(event.target.value)}
                color="secondary"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
