import React, { Component } from "react";
import "./container.css";
import { Cat_List_Unit, Detail_Unit } from "../component/index";

class Container extends Component {
  state = { number: 0 };

  componentDidMount() {
    this._getCat();
  }

  _getCat = async () => {
    const catData = await this._callApi(); //.res.rows를 반환 받음
    this.setState({
      catDatas: catData
    });
  };
  _callApi = () => {
    return fetch(
      "http://gsx2json.dilrong.com/api?id=1ZoijRVdl-zti2WiuJ7KzFz8JCDMtluYcXxW_ORXuWMM&&columns=false"
    )
      .then(response => response.json())
      .then(res => res.rows)
      .catch(err => console.log(err));
  };
  _renderCat_List_Unit = () => {
    const cat_List_Units = this.state.catDatas.map(catdata => {
      return (
        //<button onClick={clickRefundNumber}>
        <button
          onClick={e => {
            e.preventDefault();
            this.setState({ number: catdata.id });
          }}
        >
          <Cat_List_Unit
            kind={catdata.kindname}
            image={catdata.kindimage}
            Id={catdata.id}
          />
        </button>
      );
    });
    return cat_List_Units;
  };
  _renderDetail_Unit = () => {
    return (
      <Detail_Unit
        name={this.state.catDatas[this.state.number].name}
        image={this.state.catDatas[this.state.number].image}
        life={this.state.catDatas[this.state.number].life}
        tendency={this.state.catDatas[this.state.number].tendency}
        origin={this.state.catDatas[this.state.number].origin}
        feature={this.state.catDatas[this.state.number].feature}
      />
    );
  };
  clickRefundNumber = e => {
    e.preventDefault();
    this.setState({ number: this.id });
  };
  render() {
    return (
      <div className="container">
        <div className="leftSpace">
          {this.state.catDatas ? this._renderCat_List_Unit() : "Loading"}
        </div>
        <div className="rightSpace">
          {this.state.catDatas ? this._renderDetail_Unit(0) : "Loading"}
        </div>
      </div>
    );
  }
}

export default Container;
