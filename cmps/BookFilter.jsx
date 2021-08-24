export const BookFilter = ({ onSetFilter, filterBy }) => {
  return (
    <form className="frm-filter">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" onChange={onSetFilter} value={filterBy.title} />
      <label htmlFor="min-price">Min Price</label>
      <input
        type="range"
        name="minPrice"
        id="min-price"
        max={filterBy.maxPrice}
        onChange={onSetFilter}
        value={filterBy.minPrice}
      />
      <label>{filterBy.minPrice}</label>
      <label htmlFor="max-price">Max Price</label>
      <input
        type="range"
        name="maxPrice"
        id="max-price"
        min={filterBy.minPrice}
        max={200}
        onChange={onSetFilter}
        value={filterBy.maxPrice}
      />
      <label>{filterBy.maxPrice}</label>
    </form>
  );
};
