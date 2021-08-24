import { ReviewDelete } from './review-delete.jsx';
import { StarsRating } from './stars-rating.jsx';

export const BookReview = ({ review, onDelete }) => {
  return (
    <article className="book-review">
      <ReviewDelete onDelete={() => onDelete(review.id)} />
      <h2>
        {review.title}{' '}
        <StarsRating rating={review.rating} isReadOnly={true} onStarClick={() => {}} />
      </h2>
      <p>
        <i>
          {review.author}, {new Date(review.date).toLocaleDateString('he-IL')}
        </i>
      </p>
      <p>{review.text}</p>
    </article>
  );
};
