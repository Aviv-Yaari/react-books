import { BookReviews } from '../cmps/book-reviews/book-reviews.jsx';
import ReviewAdd from '../cmps/book-reviews/review-add.jsx';
import { BookTags } from '../cmps/BookTags.jsx';
import LongTxt from '../cmps/LongTxt.jsx';
import { bookService } from '../services/book.service.js';
import { utilService } from '../services/util.service.js';
const { Link } = ReactRouterDOM;

export class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { book: null, isLongTxtShown: false };
  }

  componentDidMount() {
    this.loadBook();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) this.loadBook();
  }

  loadBook = () => {
    const { bookId } = this.props.match.params;
    bookService.findById(bookId).then((book) => this.setState({ book }));
  };

  toggleLongTxt = () => {
    this.setState((prevState) => ({ isLongTxtShown: !prevState.isLongTxtShown }));
  };

  onAddReview = (ev, review) => {
    ev.preventDefault();
    const { id } = this.state.book;
    bookService.addReview(id, review);
    this.loadBook();
  };

  onDeleteReview = (reviewId) => {
    bookService.deleteReview(reviewId);
    this.loadBook();
  };

  render() {
    const { book } = this.state;
    if (!book) return <div>Loading..</div>;
    const {
      id,
      title,
      subtitle,
      authors,
      publishedDate,
      description,
      pageCount,
      categories,
      language,
      listPrice,
    } = book;
    const tags = [
      { 'long read': pageCount > 500 },
      { 'decent read': pageCount < 500 && pageCount > 200 },
      { 'light read': pageCount < 100 },
      { 'veteran book': new Date().getFullYear() - publishedDate > 10 },
      { 'new book!': new Date().getFullYear() - publishedDate < 1 },
      { 'sale!': listPrice.isOnSale },
    ];

    const priceClass = listPrice.amount > 150 ? 'expensive' : listPrice.amount < 20 ? 'cheap' : '';
    const { isLongTxtShown } = this.state;
    return (
      <div className="book-container container gap-4 d-grid">
        <div className="book-nav d-flex justify-content-between">
          <Link to={`/book/${bookService.getNegBookId(id, -1)}`}>&lt;&lt;</Link>
          <Link to="/book">Back to catalog</Link>
          <Link to={`/book/${bookService.getNegBookId(id, 1)}`}>&gt;&gt;</Link>
        </div>
        <section className="book-details bg-light">
          <div className="book-details-header mb-4 text-center">
            <h2 className={priceClass}>{title}</h2>
            <p>Subtitle: {subtitle}</p>
            <BookTags tags={tags.filter((tag) => Object.values(tag)[0])} />
          </div>
          <p>By: {authors.join(',')}</p>
          <p>Published: {publishedDate}</p>
          <LongTxt
            text={description}
            isLongTxtShown={isLongTxtShown}
            toggleLongTxt={this.toggleLongTxt}
          />
          <p>Page Count: {pageCount}</p>
          <p>Categories: {categories.join(',')}</p>
          <p>Language: {language}</p>
          <p>
            Price: {listPrice.amount}
            {utilService.getCurrencyIcon(listPrice.currencyCode)}
          </p>

          <img src={book.thumbnail} alt="" />
        </section>
        <ReviewAdd onAddReview={this.onAddReview} />
        <BookReviews reviews={book.reviews} onDeleteReview={this.onDeleteReview} />
      </div>
    );
  }
}
