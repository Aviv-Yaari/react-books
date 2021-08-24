import { BookPreview } from './BookPreview.jsx';

export const BookList = ({ books, onSelectBook }) => {
  return (
    <main className="book-list">
      {books.map((book) => (
        <BookPreview key={book.id} book={book} onSelect={() => onSelectBook(book.id)} />
      ))}
    </main>
  );
};
