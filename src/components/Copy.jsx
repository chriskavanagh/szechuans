import React from "react";
import Soups from "./Soups";
import Beef from "./Beef";
import Pork from "./Pork";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

export default function Menu(props) {
  const menu = useSelector(state => state.menuReducer.items);
  console.log(menu);

  return (
    <Container>
      <Row>
        <Col xs="12" sm="6">
          <div className="menu-section">
            <h2 className="menu-section-title">Soups &amp; Salads</h2>
            <hr />
            <div className="menu-item">
              <div className="menu-item-name"> Miso Soup </div>
              <div className="menu-item-price"> $1.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>

            <div className="menu-item">
              <div className="menu-item-name"> House Salad </div>
              <div className="menu-item-price"> $1.50 </div>
              <div className="menu-item-description">-Ginger Dressing. </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Spicy Tuna &amp; Seaweed </div>
              <div className="menu-item-price"> $8.00 </div>
              <div className="menu-item-description">-No description. </div>
            </div>

            <div className="menu-item">
              <div className="menu-item-name"> Kanikama &amp; Seaweed </div>
              <div className="menu-item-price"> $7.50 </div>
              <div className="menu-item-description">-No description.</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                Spicy Fresh Crab &amp; Seaweed{" "}
              </div>
              <div className="menu-item-price"> $9.50 </div>
              <div className="menu-item-description">-No description.</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                Salmon Skin &amp; Seaweed Salad{" "}
              </div>
              <div className="menu-item-price"> $8.50 </div>
              <div className="menu-item-description">-No description.</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                Futo Salad - Lettuce, crab, seaweed,cucumber, masago.{" "}
              </div>
              <div className="menu-item-price"> $6.50 </div>
              <div className="menu-item-description">
                -Lettuce, crab, seaweed, cucumber, masago, vinegar dressing.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                House Soup - Pork Dumpling Soup{" "}
              </div>
              <div className="menu-item-price"> $6.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>

            <div className="menu-item">
              <div className="menu-item-name"> Seaweed Salad </div>
              <div className="menu-item-price"> $5.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Avocado Salad </div>
              <div className="menu-item-price"> $4.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="6">
          <div className="menu-section">
            <h2 className="menu-section-title">Soups &amp; Salads</h2>
            <hr />
            <div className="menu-item">
              <div className="menu-item-name"> Miso Soup </div>
              <div className="menu-item-price"> $1.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>

            <div className="menu-item">
              <div className="menu-item-name"> House Salad </div>
              <div className="menu-item-price"> $1.50 </div>
              <div className="menu-item-description">-Ginger Dressing. </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Spicy Tuna &amp; Seaweed </div>
              <div className="menu-item-price"> $8.00 </div>
              <div className="menu-item-description">-No description. </div>
            </div>

            <div className="menu-item">
              <div className="menu-item-name"> Kanikama &amp; Seaweed </div>
              <div className="menu-item-price"> $7.50 </div>
              <div className="menu-item-description">-No description.</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                Spicy Fresh Crab &amp; Seaweed{" "}
              </div>
              <div className="menu-item-price"> $9.50 </div>
              <div className="menu-item-description">-No description.</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                Salmon Skin &amp; Seaweed Salad{" "}
              </div>
              <div className="menu-item-price"> $8.50 </div>
              <div className="menu-item-description">-No description.</div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                Futo Salad - Lettuce, crab, seaweed,cucumber, masago.{" "}
              </div>
              <div className="menu-item-price"> $6.50 </div>
              <div className="menu-item-description">
                -Lettuce, crab, seaweed, cucumber, masago, vinegar dressing.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name">
                {" "}
                House Soup - Pork Dumpling Soup{" "}
              </div>
              <div className="menu-item-price"> $6.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>

            <div className="menu-item">
              <div className="menu-item-name"> Seaweed Salad </div>
              <div className="menu-item-price"> $5.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Avocado Salad </div>
              <div className="menu-item-price"> $4.50 </div>
              <div className="menu-item-description">-No description. </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
