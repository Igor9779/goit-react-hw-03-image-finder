import { Component } from "react";

export class SearchBar extends Component {
    state = { searchQuery: '' } 

    handleChange = e => {
        this.setState({ searchQuery: e.currentTarget.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
            return alert('Please, write something')
        };
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    render() { 
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchQuery"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
 
export default SearchBar;