const { Link } = ReactRouterDOM;

export const HomePage = () => {
  return (
    <main className="home-container">
      <div className="home">
        <section className="home-text">
          <h1>Welcome to Books!</h1>
          <h2>Enjoy your favourite books, everywhere</h2>
          <Link to="/book">
            <button>Get Started</button>
          </Link>
        </section>
      </div>
    </main>
  );
};
