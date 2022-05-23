import { jpath } from '../App';
import InfoRow from "./info-row";
var jp = require("jsonpath");

const MonsterModal = ({ id, username, monster }) => {
  const inforows = ['username', 'website', 'zipcode'];
  return (
    <div className="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" id={'modal' + id}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">More Info</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {
              inforows.map(ir => <InfoRow content={jp.query(monster, jpath[ir])[0]} text={ir} />)
            }
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MonsterModal;