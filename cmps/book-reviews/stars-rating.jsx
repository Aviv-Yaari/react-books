import { Star } from './star.jsx';

export class StarsRating extends React.Component {
  state = {
    rating: this.props.rating,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rating !== this.props.rating) {
      this.setState({ rating: this.props.rating });
    }
  }

  onStarHover = (rating) => {
    if (this.props.isReadOnly) return;
    this.setState({ rating });
  };

  onStarUnhover = () => {
    if (this.props.isReadOnly) return;
    this.setState({ rating: this.props.rating });
  };

  render() {
    const { onStarClick } = this.props;
    const { rating } = this.state;

    let stars = [1, 2, 3, 4, 5].map((num) => (
      <Star
        key={num}
        isChecked={rating >= num}
        onStarClick={() => onStarClick(num)}
        onStarHover={() => this.onStarHover(num)}
        onStarUnhover={this.onStarUnhover}
      />
    ));
    return <span className="rating-stars">{stars}</span>;
  }
}
