import { Component } from "react";
import { toast } from "react-toastify";

class Searchbar extends Component {
  state = {
    query: "",
  };

  onInputChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") {
      return toast.error("Введите корректно!");
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.query}
            onChange={this.onInputChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
