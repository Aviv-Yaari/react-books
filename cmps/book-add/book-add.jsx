import { bookService } from '../../services/book.service.js';
import { BookAddResults } from './book-add-results.jsx';

export class BookAdd extends React.Component {
  state = {
    isActive: false,
    search: '',
    results: null,
  };

  onToggleActive = () => {
    this.setState((prevState) => ({ isActive: !prevState.isActive, search: '', results: null }));
  };

  onChange = (ev) => {
    const { value: search } = ev.target;
    this.setState({ search });
    bookService.searchInAPI(search).then((results) => this.setState({ results }));
  };

  onAddBook = (book) => {
    this.setState((prevState) => ({
      results: prevState.results.filter((result) => result.id !== book.id),
    }));
    this.props.onAddBook(book);
  };

  render() {
    const { isActive, search, results } = this.state;
    return (
      <section className="book-add py-5 container-fluid">
        {isActive && (
          <div>
            <input
              type="text"
              name="add-search"
              id="add-search"
              value={search}
              onChange={this.onChange}
              placeholder="Type a book title..."
            />
            <BookAddResults onAddBook={this.onAddBook} results={results} />
          </div>
        )}
        <button className="btn btn-primary" onClick={this.onToggleActive}>
          {isActive ? 'Cancel' : 'Add Book'}
        </button>
      </section>
    );
  }
}
