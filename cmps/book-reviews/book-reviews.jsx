import { BookReview } from './book-review.jsx';

export class BookReviews extends React.Component {
  state = { reviews: null };
  componentDidMount() {
    this.loadReviews();
  }

  loadReviews = () => {
    const { reviews } = this.props;
    this.setState({ reviews });
  };

  render() {
    const { reviews, onDeleteReview } = this.props;
    if (!reviews) return <div className="book-review">Loading reviews...</div>;
    if (!reviews.length) return <div className="book-review">No reviews yet!</div>;
    return (
      <div className="book-reviews">
        {reviews.map((review) => (
          <BookReview key={review.id} review={review} onDelete={onDeleteReview} />
        ))}
      </div>
    );
  }
}
