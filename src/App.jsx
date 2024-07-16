import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <>
      <div className="container-fluid bg-dark p-3">
        <div className="container bg-dark text-light ms-5">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="m-1"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <strong className="text-light">Album</strong>
          </a>
        </div>
      </div>

      <div className="container my-5">
        <p className="text-center ms-5">
          <h2>Album example</h2>
          <p className="text-muted">
            Something short and leading about the collection below—its contents,
            <p>
              the creatoretc. Make it short and sweet, but not too short so
              folks don't
              <br /> simply skip over it entirely.
              <br />
              <br />
              <Button variant="primary m-1">Main call to action</Button>
              <Button variant="secondary">Secondary action</Button>
            </p>
          </p>
        </p>
      </div>

      <div className="container p-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button type="button" class="btn btn-smbtn-outline-secondary">
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm  btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1909b772355%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1909b772355%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <div class="ms-auto m-1 bd-highlight">9 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-light mt-5">
        <footer className="text-muted">
          <div className="container">
            <div class="d-flex ms-auto float-right">
              <p>
                Album example is © Bootstrap, but please download and customize
                it for yourself! <br /> New to Bootstrap?{" "}
                <a href="">Visit the homepage</a> or read our{" "}
                <a href="">getting started guide.</a>
              </p>

              <a href="" className="ms-auto">
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
