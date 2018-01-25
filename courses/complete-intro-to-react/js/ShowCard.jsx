// @flow

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled((Link: any))`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends Component {
  shouldComponentUpdate() {
    return false;
  }
  props: Show;
  render() {
    const { imdbID, title, year, poster, description } = this.props;
    return (
      <Wrapper to={`/details/${imdbID}`}>
        <Image
          alt={`${title} Show Poster`}
          src={`/public/img/posters/${poster}`}
        />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </Wrapper>
    );
  }
}

export default ShowCard;
