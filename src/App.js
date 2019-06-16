import React from "react";
import state from "./state";
import Filters from "./Filters";
import List from "./List";
import ajax from "./ajax";

class App extends React.Component {
  constructor() {
    super();
    this.state = state;
    this.onChange = (state, refresh) => {
      this.setState({ ...this.state, ...state }, () => refresh && this.ajax());
    };
  }

  componentDidMount() {
    this.ajax();
  }

  async ajax() {
    this.onChange({ list: [] });
    ajax(this.state).then(list => this.onChange({ list }));
  }

  render() {
    const { filters, list } = this.state;

    return (
      <section>
        <Filters filters={filters} onChange={this.onChange} />
        <List list={list} styles={filters.image.values[filters.image.active]} />
      </section>
    );
  }
}

export default App;
