import React, { Component } from "react";
import "./Cat_List_Unit.css";
import { List } from "semantic-ui-react";

class Cat_List_Unit extends Component {
  render() {
    return (
      <List divided relaxed className="Cat_List">
        <List.Item>
          <List.Content className="catList">
            <img src={this.props.image} className="Cat_List_Image" />
            <List.Description className="Cat_List_Name">
              {this.props.kind}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default Cat_List_Unit;
