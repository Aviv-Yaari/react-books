export const Star = ({ isChecked, onStarClick, onStarHover, onStarUnhover }) => {
  return (
    <span
      className="star"
      onClick={onStarClick}
      onMouseOver={onStarHover}
      onMouseLeave={onStarUnhover}>
      {isChecked ? '★' : '☆'}
    </span>
  );
};
