

const FilterBy = ({ filterValue, handleUpdate }) => (
  <div className='text-start col'>
    <label htmlFor="filterby" className="form-label fs-4">Filter By</label>
    <select value={filterValue} onChange={e => handleUpdate(e.target.value)} id='filterby' className="form-select">
      <option value='name'>Name</option>
      <option value="email">Email</option>
      <option value="company">Company</option>
      <option value="phone">Phone</option>
      <option value="city">City</option>
    </select>
  </div>
);

export default FilterBy;