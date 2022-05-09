

const MonstersList = ({ monsters }) => 
(
  <div className='mt-5 row row-cols-3 g-2'>
    { monsters.map(m => 
      <div key={m.id} className='col'>
        <div className='card'>
          <div className='fs-5 card-header text-start'>
            {m.name}
          </div>
          <div className='card-body lead'>
            <div className='row border-bottom'>
              <div className='col-4 text-start fw-bold'>Email</div>
              <div className='col'>{m.email}</div>
            </div>
            <div className='row border-bottom'>
              <div className='col-4 text-start fw-bold'>Company</div>
              <div className='col'>{m.company.name}</div>
            </div>
            <div className='row border-bottom'>
              <div className='col-4 text-start fw-bold'>Phone</div>
              <div className='col'>{m.phone}</div>
            </div>
            <div className='row border-bottom'>
              <div className='col-4 text-start fw-bold'>City</div>
              <div className='col'>{m.address.city}</div>
            </div>
            
          </div>
        </div>
      </div>
    )}
  </div>
);
  


export default MonstersList;