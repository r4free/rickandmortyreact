import React from "react";
import { Input, Icon } from "react-materialize";

const form = props => {
  return (
    <form onSubmit={props.search}>
      <Input l={10} label="Search" className="yellow-text">
        <Icon>search</Icon>
      </Input>
      <Input type="submit" value="Go" className="btn" l={2} />
    </form>
  );
};
export default form;
