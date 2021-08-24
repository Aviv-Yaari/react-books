export const BookTag = ({ tag }) => {
  return <span className="book-tag">{Object.keys(tag)}</span>;
};
