
const SearchBar = ({ handleUpdate }) => (
  <div className='my-5  text-start'>
    <label for='search' className=' form-label fs-4'>Search</label>
    <input 
      id='search'
      className='form-control'
      type='search'
      placeholder='Type a monster' 
      onChange={e => handleUpdate(e.target.value)}
    /> 
  </div>
  
);

export default SearchBar;