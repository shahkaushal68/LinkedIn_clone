import React from "react";

const RightSidebar = () => {
  return (
    <aside id="right-aside">
      <div id="rec-section">
        <div>
          <header>
            <span>Add to your feed</span>
            <span className="fas fa-info-circle" aria-hidden="true">
              <div id="float-info">
                <span>
                  Follow things that interest you to personalize your feed.
                </span>
                <a href="#">Learn more.</a>
              </div>
              <span>►</span>
              <div id="square"></div>
            </span>
          </header>
          <div>
            <div>
              <img src="images/mongo.jpeg" alt="" />
              <div>
                <strong>MongoDB</strong>
                <small>Company - Computer Software</small>
              </div>
              <button>
                <span className="fas fa-plus" aria-hidden="true"></span>
                <span>Follow</span>
              </button>
            </div>
            <div>
              <img src="images/react.png" alt="" />
              <div>
                <strong>#reactjs</strong>
              </div>
              <button>
                <span className="fas fa-plus" aria-hidden="true"></span>
                <span>Follow</span>
              </button>
            </div>
            <div>
              <img src="images/example-person.jpeg" alt="" />
              <div>
                <strong>John Smith</strong>
                <small>Entrepreneur and Marketing Specialist</small>
              </div>
              <button>
                <span className="fas fa-plus" aria-hidden="true"></span>
                <span>Follow</span>
              </button>
            </div>
          </div>
          <a href="#">View all recommendations</a>
        </div>
      </div>
      <div id="linkedin-section">
        <section>
          <small>Ad</small>
          <a href="#">
            <span>
              Maurício, unlock your full potential with Linkedin Premium
            </span>
            <div>
              <img src="images/picture.jpeg" alt="" />
              <img id="linkedin-key" src="images/linkedin-ad.png" alt="" />
            </div>
            <strong>See who's viewed your profile in the last 90 days</strong>
            <div>
              <button>Try for free</button>
            </div>
          </a>
        </section>
        <footer>
          <ul>
            <li>About</li>
            <li>Help Center</li>
            <li>
              Privacy &amp; Terms
              <span className="fas fa-angle-down" aria-hidden="true"></span>
            </li>
            <li>Advertising</li>
            <li>
              Business Services
              <span className="fas fa-angle-down" aria-hidden="true"></span>
            </li>
            <li>Get the LinkedIn app</li>
            <li>More</li>
          </ul>
          <div>
            <strong>
              Linked<span>in</span>
            </strong>
            <span>LinkedIn Corporation © 2019</span>
          </div>
        </footer>
      </div>
    </aside>
  );
};

export default RightSidebar;
