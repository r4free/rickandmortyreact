import React from "react";
import { API_URL } from "../config";

export default class Paginate extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentPage: 1
    };
  }

  getPaginationLinks() {
    let indents = [];
    for (let i = 0; i < this.props.info.pages; i++) {
      let url = `${this.props.url}?page=${i + 1}`;
      indents.push(
        <li className={this.getCurrentPage() === i + 1 ? "active" : ""} key={i}>
          <a
            href="#!"
            onClick={() => {
              this.setCurrentPage(i + 1);
              this.getCurrentPage() != i + 1 && this.props.paginate(url);
            }}
          >
            {i + 1}
          </a>
        </li>
      );
    }
    return indents;
  }

  setCurrentPage(number) {
    this.setState({ currentPage: number });
  }
  getCurrentPage() {
    return this.state.currentPage;
  }

  render() {
    return (
      <div className="center-align">
        <ul className="pagination">{this.getPaginationLinks()}</ul>
      </div>
    );
  }
}
