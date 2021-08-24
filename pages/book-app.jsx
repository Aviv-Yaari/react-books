import { bookService } from '../services/book.service.js';
import { BookAdd } from '../cmps/book-add/book-add.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';
import { BookList } from '../cmps/BookList.jsx';
import { eventBusService } from '../services/event-bus.service.js';

export class BookApp extends React.Component {
  state = {
    books: null,
    filterBy: { title: '', minPrice: 0, maxPrice: 200 },
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    const { filterBy } = this.state;
    bookService.query(filterBy).then((books) => this.setState({ books }));
  };

  onSetFilter = (ev) => {
    let { name, value, type } = ev.target;

    if (type === 'range' || type === 'number') value = +value;
    this.setState(
      (prevState) => ({ filterBy: { ...prevState.filterBy, [name]: value } }),
      this.loadBooks
    );
  };

  onSelectBook = (id) => {
    this.props.history.push(`/book/${id}`);
  };

  onAddBook = (book) => {
    bookService.addBook(book).then((addedId) => {
      eventBusService.emit('user-msg', {
        text: 'book added',
        book: { ...book, addedId },
        type: 'success',
      });
      this.loadBooks();
    });
  };

  render() {
    const { books, filterBy } = this.state;
    if (!books) return <p>Loading..</p>;
    return (
      <React.Fragment>
        <BookFilter filterBy={filterBy} onSetFilter={this.onSetFilter} />
        <BookAdd onAddBook={this.onAddBook} />
        <BookList onSelectBook={this.onSelectBook} books={books} />
      </React.Fragment>
    );
  }
}
