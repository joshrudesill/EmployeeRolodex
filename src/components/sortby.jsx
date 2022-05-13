
const SortBy = ({ sortValue, handleUpdate }) => (
  <div className='text-start col my-2'>
    <label htmlFor="filterby" className="form-label fs-4">Sort By</label>
    <select value={sortValue} onChange={e => handleUpdate(e.target.value)} id='filterby' className="form-select">
      <option value='name'>Name</option>
      <option value="email">Email</option>
      <option value="company">Company</option>
      <option value="phone">Phone</option>
      <option value="city">City</option>
    </select>
  </div>
);

export default SortBy;