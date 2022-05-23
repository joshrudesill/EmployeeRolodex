import { jpath } from '../App';
import HighlightedText from "./highlighted-text";
import InfoRow from "./info-row";
var jp = require("jsonpath");

const MonsterCard = ({ id, monster, filteredBy, searchField, name }) => {
  const infoRows = ['email', 'company', 'phone', 'city'];
  return (
        <div key={id} className='col g-2'>
          <div className='card shadow shadow-md' style={{border: 'none'}}>
            <div className='fs-4 card-header p-0' style={{background: 'linear-gradient(90deg, rgb(28,181,224, 0.3) 0%, rgb(0,8,81, 0.5) 100%)'}}>
              <div className='d-flex justify-content-between'>
                <span className='p-2'>{filteredBy === 'name' ? <HighlightedText text={name} toHighlight={searchField}/> : name}</span>
                <span>
                  <button type="button" className="btn mt-1" data-bs-toggle="modal" data-bs-target={'#modal' + id}>
                    <i className="bi bi-info-circle fs-4"></i>
                  </button>
                </span>
              </div>
            </div>
            <div className='card-body lead'>
              {
                infoRows.map(
                  row => 
                  {
                    return <InfoRow 
                              key={row}
                              searchField={searchField} 
                              filteredBy={filteredBy} 
                              text={row}
                              content={jp.query(monster, jpath[row])[0]}/>
                  }
                )
              }
            </div>
          </div>
        </div>
  )
}

export default MonsterCard;