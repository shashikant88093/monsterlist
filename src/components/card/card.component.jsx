import React from "react";
import "./card.styles.css";
import { Row, Col } from "reactstrap";

export const Card = (props) => (
  <Row>
    <Col>
      <div className="card-container">
        <img
          alt="monster"
          src={`https://source.unsplash.com/random/1600*800${props.monster.id}/?set=set2`}
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
      </div>
    </Col>
  </Row>
);
