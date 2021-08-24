import { StarsRating } from './stars-rating.jsx';
export class ReviewAdd extends React.Component {
  initialState = { author: '', title: '', rating: 3, text: '', date: '2021-08-23' };
  state = this.initialState;
  authorRef = React.createRef();

  componentDidMount() {
    this.authorRef.current.focus();
  }

  onInputChange = (ev) => {
    this.setState({ [ev.target.id]: ev.target.value });
  };

  onStarClick = (value) => {
    this.setState({ rating: value });
  };

  render() {
    const { onAddReview } = this.props;
    const { author, title, rating, text, date } = this.state;
    return (
      <form
        className="add-review bg-light p-3"
        onSubmit={(ev) => {
          onAddReview(ev, this.state);
          this.setState({ ...this.initialState });
        }}>
        <h2 className="mb-3">Add Your Review</h2>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            placeholder="Yossi Benayoun"
            onChange={this.onInputChange}
            required
            ref={this.authorRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Review Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.onInputChange}
            placeholder="Such a book, such"
            required
          />
        </div>
        <div className="mb-3">
          <StarsRating rating={rating} isReadOnly={false} onStarClick={this.onStarClick} />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Review:
          </label>
          <textarea
            className="form-control"
            id="text"
            rows="3"
            value={text}
            onChange={this.onInputChange}
            required
            placeholder="Your review goes here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Read At:
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={this.onInputChange}
            required
          />
        </div>
        <button className="btn btn-primary" onSubmit={onAddReview}>
          Add Review
        </button>
      </form>
    );
  }
}

export default ReviewAdd;
