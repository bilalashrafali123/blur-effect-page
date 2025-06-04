import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <section className="hero">
          <div className="hero-image">
            <header className="navbar">
              <div className="menu-bg">
              <span className="menu-btn">
                Menu{" "}
                <span className="menu-bars">
                  <i className="fa-solid fa-bars-staggered"></i>
                </span>
              </span>
                </div>
              <div className="lang-select">🌐 EN FR DUBAI</div>
              <input
                type="text"
                className="search"
                placeholder="Searchings..."
              />
              <div className="profile">👤 Zarah</div>
            </header>
            <div className="hero-content">
              <div className="pagination">
                <span className="active">01</span>
                <span>02</span>
                <span>03</span>
              </div>
              <div className="cta-div">
                <button className="cta-btn">➜</button>
              </div>
              <div className="side-cards">
                <div className="mini-card">With Kids</div>
                <div className="mini-card">And Pets</div>
              </div>
            </div>
          </div>
        </section>
        <section className="info">
          <div className="left-info">
            <h1>Cosmic Connections</h1>
            <h2>
              Bridging the Gap <br /> Between Earth <br /> and Space
            </h2>
            <p>
              It offers a wide range of content <br /> related to space tourism,
              including <br />
              articles, videos, and guides.
            </p>
            <div className="stats">+46k Enjoy travel with us</div>
            <div className="bottom-row">
              <button className="discover">Discover More</button>
              <div className="icons">
                <div className="planet-1">
                  🪐{" "}
                  <span>
                    Journey to the <br /> red planet
                  </span>
                </div>
                <div className="planet-2">
                  🌕{" "}
                  <span>
                    journey to the <br /> moon
                  </span>
                </div>
                <div className="planet-3">
                  🌑{" "}
                  <span>
                    Unleash your <br /> inner astronaut
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right-cards">
            <div className="space-card">
              <img
                src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Jupiter"
              />
              <div className="text">
                <strong>01</strong>
                <p>
                  Jupiter is the 5<sup>th</sup> planet from the sun.
                </p>
                <button>More</button>
              </div>
            </div>
            <div className="space-card">
              <img
                src="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Neptune"
              />
              <div className="text">
                <strong>02</strong>
                <p>
                  Neptune is the 8<sup>th</sup> planet from the sun
                </p>
                <button>More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
