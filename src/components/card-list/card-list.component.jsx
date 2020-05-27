import React from "react";
import { Card } from "../card/card.component";
import { Row, Col } from "reactstrap";
//css
import "./Card-list.styles.css";
export const CardList = (props) => {
  return (
    <Row>
      <Col>
        <div className="card-list">
          {props.monstars.map((monster) => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
      </Col>
    </Row>
  );
};
