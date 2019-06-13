import React from "react";
import "./App.css";
import state from "./state";
import Header from "./Header";
import List from "./List";
import ajax, { getUrl } from "./ajax";

class App extends React.Component {
  constructor() {
    super();
    this.state = state;
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.ajax();
  }

  async ajax() {
    this.onChange({ list: [] });
    const list = await ajax(getUrl(this.state));
    this.onChange({ list });
  }

  onChange(state, refresh) {
    this.setState({ ...this.state, ...state }, () => refresh && this.ajax());
  }

  render() {
    const { filters, list } = this.state;

    return (
      <section>
        <Header filters={filters} onChange={this.onChange} />
        <List list={list} styles={filters.image.values[filters.image.active]} />
      </section>
    );
  }
}

export default App;
