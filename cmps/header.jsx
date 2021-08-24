const { NavLink, Link } = ReactRouterDOM;
export const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1>Books</h1>
      </Link>
      <div>
        <NavLink to="/book">Catalog</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </header>
  );
};
