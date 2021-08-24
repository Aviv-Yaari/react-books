import { BookTag } from './BookTag.jsx';

export const BookTags = ({ tags }) => {
  return (
    <div className="book-tags">
      {tags.map((tag) => (
        <BookTag key={Object.keys(tag)} tag={tag} />
      ))}
    </div>
  );
};
