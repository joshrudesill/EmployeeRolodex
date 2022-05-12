import HighlightedText from "./highlighted-text";
import InfoRow from "./info-row";
import { deriveJPath } from '../App';
var jp = require("jsonpath");

const MonstersList = ({ monsters, filteredBy, searchField }) => 
{
  const rows = ['email', 'company', 'phone', 'city'];
  const paths = rows.map(row => deriveJPath(row));
  return (
    <div className='mt-5 row row-cols-3 g-2'>
      { monsters.map(m => 
        <div key={m.id} className='col'>
          <div className='card'>
            <div className='fs-5 card-header text-start bg-muted'>
              {filteredBy === 'name' ? <HighlightedText text={m.name} toHighlight={searchField}/> : m.name}
            </div>
            <div className='card-body lead'>
              {
                rows.map(
                  (row, index) => 
                  {
                    return <InfoRow 
                    searchField={searchField} 
                    filteredBy={filteredBy} 
                    text={row}
                    content={jp.query(m, paths[index])[0]}/>}
                )
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

  


export default MonstersList;