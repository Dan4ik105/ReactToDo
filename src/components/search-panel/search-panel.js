/* eslint-disable react/prop-types */
import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {

    constructor(props){
        super(props);
        this.state={
            term:''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(event){
        const term = event.target.value;
        this.setState({
            term: term
        });
        this.props.onUpdateSearch(term);
    }

  render(){
    return(
        <input
            className="form-control searc`h-input"
            type="text"
            placeholder="Поиск по записям"
            onChange={this.onUpdateSearch}
        ></input>
    )
  }
}