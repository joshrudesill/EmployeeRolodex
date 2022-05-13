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
        <div key={m.id} className='col g-2'>
          <div className='card shadow shadow-md' style={{border: 'none'}}>
            <div className='fs-4 card-header text-start' style={{background: 'linear-gradient(90deg, rgb(28,181,224, 0.3) 0%, rgb(0,8,81, 0.5) 100%)'}}>
              {filteredBy === 'name' ? <HighlightedText text={m.name} toHighlight={searchField}/> : m.name}
            </div>
            <div className='card-body lead'>
              {
                rows.map(
                  (row, index) => 
                  {
                    return <InfoRow 
                              key={row}
                              searchField={searchField} 
                              filteredBy={filteredBy} 
                              text={row}
                              content={jp.query(m, paths[index])[0]}/>
                  }
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