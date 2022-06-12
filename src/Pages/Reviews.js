import { useState } from "react";
import SearchBar from "../Navbar/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import filtericon from "../Icons/Filtericon.png";
import maskgroup1 from "../images/Maskgroup1.png";
import maskgroup2 from "../images/Maskgroup2.png";
import maskgroup3 from "../images/Maskgroup3.png";
import rev1 from "../images/googlerev.png";
import rev2 from "../images/microsoftrev.png";
import rev3 from "../images/apprev.png";
import rev4 from "../images/oracalrev.png";
import { FaStar } from "react-icons/fa";
import "./review.css";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Reviews = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const tags = document.getElementsByClassName("tag");

  for (let tag of tags) {
    tag.addEventListener("click", () => {
      tag.classList.toggle("selected");
    });
  }
  return (
    <div>
      <div className="section1">
        <Container className="searching" bg="dark">
          <Row>
            <Col>
              <SearchBar className="searchbar"/>
            </Col>
            <Col>
              <img
                className="filter"
                src={filtericon}
                alt="notification-bell"
              />
            </Col>
          </Row>
        </Container>

        <div classname="searchbtnn">
          <button className="searchbtn"> search </button>
        </div>
      </div>
      {""}
      <h3 className="top-reviewed">Top reviewed Tech companies</h3>
       <Container bg="dark">
        <Row>
          <Col>
            <img className="review-example" src={rev1} alt="Review Example" />
          </Col>
          <Col>
            <img className="review-example" src={rev2} alt="Review Example" />
          </Col>
        </Row>
          <Row>
          <Col>
            <img className="review-example" src={rev3} alt="Review Example" />
          </Col>
          <Col>
            <img className="review-example" src={rev4} alt="Review Example" />
          </Col>
        </Row>
        </Container>
      <div className="section2">
        <h4 className="recentrev"> Recent reviews</h4>
        <Container>
          <Row>
            <Col>
              <div class="review-card">
                <div class="review-header">
                  <div class="name-group">
                    <div class="initials">
                      {" "}
                      <img
                        className="intro-logo"
                        src={maskgroup1}
                        alt="Trustly"
                      />
                    </div>
                    <div class="rating">
                      <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <FaStar
                              key={index}
                              size={24}
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              color={
                                (hoverValue || currentValue) > index
                                  ? colors.orange
                                  : colors.grey
                              }
                              style={{
                                marginRight: 10,
                                cursor: "pointer",
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="review-description">
                  <p>
                    <b>Lack of consideration for...</b>
                  </p>
                  <p>
                    “I enjoyed the job, but left the company after my return...
                  </p>
                </div>{" "}
                <div class="tags-wrapper">
                  <div class="tags-container">
                    <div class="tag">sexism</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div class="review-card">
                <div class="review-header">
                  <div class="name-group">
                    <div class="initials">
                      {" "}
                      <img
                        className="intro-logo"
                        src={maskgroup2}
                        alt="Trustly"
                      />
                    </div>
                    <div class="rating">
                      <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <FaStar
                              key={index}
                              size={24}
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              color={
                                (hoverValue || currentValue) > index
                                  ? colors.orange
                                  : colors.grey
                              }
                              style={{
                                marginRight: 10,
                                cursor: "pointer",
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="review-description">
                  <p>
                    <b>Lack of consideration for...</b>
                  </p>
                  <p>
                    “I enjoyed the job, but left the company after my return...
                  </p>
                </div>{" "}
                <div class="tags-wrapper">
                  <div class="tags-container">
                    <div class="tag">sexism</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div class="review-card">
                <div class="review-header">
                  <div class="name-group">
                    <div class="initials">
                      {" "}
                      <img
                        className="intro-logo"
                        src={maskgroup3}
                        alt="Trustly"
                      />
                    </div>
                    <div class="rating">
                      <div style={styles.stars}>
                        {stars.map((_, index) => {
                          return (
                            <FaStar
                              key={index}
                              size={24}
                              onClick={() => handleClick(index + 1)}
                              onMouseOver={() => handleMouseOver(index + 1)}
                              onMouseLeave={handleMouseLeave}
                              color={
                                (hoverValue || currentValue) > index
                                  ? colors.orange
                                  : colors.grey
                              }
                              style={{
                                marginRight: 10,
                                cursor: "pointer",
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="review-description">
                  <p>
                    <b>Lack of consideration for...</b>
                  </p>
                  <p>
                    “I enjoyed the job, but left the company after my return...
                  </p>
                </div>{" "}
                <div class="tags-wrapper">
                  <div class="tags-container">
                    <div class="tag">sexism</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default Reviews;
