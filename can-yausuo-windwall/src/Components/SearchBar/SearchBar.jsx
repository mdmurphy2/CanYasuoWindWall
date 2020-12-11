import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import './SearchBar.css';
import getChampionList from '../../Utils/GetChampionList'


let parse = require('autosuggest-highlight/parse');
let match = require('autosuggest-highlight/match');

let champions = getChampionList();

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
    
    const regex = new RegExp('\\b' + escapedValue, 'i');
    
    return champions.filter(champion => regex.test(getSuggestionValue(champion)));
  }
  
  function getSuggestionValue(suggestion) {
    return `${suggestion.championName}`;
  }
  
  function renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.championName}`;
    const matches = match(suggestionText, query);
    const parts = parse(suggestionText, matches);
    let image = require(`../../LeagueInfo/dragontail-10.10.5/img/champion/tiles/${suggestion.image}`);
    return (
      <span className='suggestion-content'>
        <img className="search-image" src={image.default}  alt='champion'/>
        <span className="name">
          {
            parts.map((part, index) => {
              const className = part.highlight ? 'highlight' : null;
  
              return (
                <span className={className} key={index}>{part.text}</span>
              );
            })
          }
        </span>
      </span>
    );
  }
  
  class SearchBar extends Component {
    constructor() {
      super();
      this.state = {
        value: '',
        suggestions: []
      };    
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
     
    
    };
    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
      if(method === 'click' || method === 'enter') {
        this.props.setChampionId(this.state.suggestions[suggestionIndex].id)
        //console.log('load new page with ' + this.state.suggestions[suggestionIndex].id);
      } 
    }
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Search for a Champion",
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      );
    }
  }
  
export default SearchBar
