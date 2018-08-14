import React from "react";

import axios from "axios";
import { API_URL } from "./../config";

import {
  Card,
  CardTitle,
  Collection,
  CollectionItem,
  Collapsible,
  CollapsibleItem,
  Row,
  Col
} from "react-materialize";
import Pagination from "./Paginate";
import Form from "./Form";

export default class CardList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      characters: [],
      info: ""
    };
  }

  getCharacter(url = `${API_URL}/character/`) {
    return axios.get(url).then(response => {
      this.setState({ characters: response.data.results });
      this.setState({ info: response.data.info });
    });
  }
  componentWillMount() {
    this.getCharacter();
  }

  cardContent(char, image = null, reveal = false) {
    return (
      <div>
        {image && (
          <img src={image} alt={char.name} className="responsive-img" />
        )}
        <p>
          <b>Status:</b> {char.status} | <b>Specie:</b> {char.species}
        </p>
        {reveal && (
          <Collapsible>
            <CollapsibleItem header={<b>Episodes showing</b>}>
              <Collection>
                {char.episode.map((ep, index) => (
                  <CollectionItem key={index}>{`Episode ${
                    ep.split("episode/")[1]
                  }`}</CollectionItem>
                ))}
              </Collection>
            </CollapsibleItem>
          </Collapsible>
        )}
      </div>
    );
  }

  search(e) {
    e.preventDefault();
    this.getCharacter(`${API_URL}/character/?name=${e.target[0].value}`);
  }
  render() {
    return (
      <Row>
        <Form search={this.search.bind(this)} />

        {this.state.characters.map((char, index) => {
          return (
            <Col l={4} m={6} s={12} key={index}>
              <Card
                waves="light"
                key={index}
                textClassName="blue-text text-darken-2"
                header={<CardTitle key={index} reveal image={char.image} />}
                title={char.name}
                reveal={<div>{this.cardContent(char, char.image, true)}</div>}
              >
                {this.cardContent(char)}
              </Card>
            </Col>
          );
        })}
        <Col l={12}>
          <Pagination
            info={this.state.info}
            url={`${API_URL}/character/`}
            paginate={this.getCharacter.bind(this)}
          />
        </Col>
      </Row>
    );
  }
}
