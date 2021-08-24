export const ReviewDelete = ({ onDelete }) => {
  return (
    <button className="btn btn-danger btn-delete-review" onClick={onDelete}>
      X
    </button>
  );
};
