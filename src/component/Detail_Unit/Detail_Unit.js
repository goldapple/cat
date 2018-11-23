import React, { Component } from "react";
import "./Detail_Unit.css";
import { List } from "semantic-ui-react";

class Detail_Unit extends Component {
  render() {
    return (
      <div className="Detail_Unit">
        <div className="Detail_Unit_Image">
          <img src={this.props.image} />
        </div>
        <List as="ol">
          <List.Item as="li" className="Detail_Unit_Name">
            고양이 이름 : {this.props.name}
          </List.Item>
          <List.Item as="li" className="Detail_Unit_Life">
            고양이 수명 : {this.props.life}
          </List.Item>
          <List.Item as="li" className="Detail_Unit_Tendency">
            고양이 성향 : {this.props.tendency}
          </List.Item>
          <List.Item as="li" className="Detail_Unit_Origin">
            고양이 원산지 : {this.props.origin}
          </List.Item>
          <List.Item as="li" className="Detail_Unit_Feature">
            고양이 특징 : {this.props.feature}
          </List.Item>
        </List>
      </div>
    );
  }
}

export default Detail_Unit;
