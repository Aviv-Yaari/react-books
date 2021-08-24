import { utilService } from '../services/util.service.js';

export const BookPreview = ({ book, onSelect }) => {
  const { title, listPrice, thumbnail } = book;

  return (
    <div
      className="book-preview"
      onClick={onSelect}
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <span className="book-info">
        {title}: {listPrice.amount + ' ' + utilService.getCurrencyIcon(listPrice.currencyCode)}
      </span>
    </div>
  );
};
