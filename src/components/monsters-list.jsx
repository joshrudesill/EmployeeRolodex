import MonsterCard from "./monster-card";
import MonsterModal from './monster-modal';
const MonstersList = ({ monsters, filteredBy, searchField }) => 
{
  return (
    <div className='mt-5 row row-cols-xl-3 row-cols-md-2 row-cols-1 g-2'>
      { monsters.map(monster => {
        return (
          <div>
            <MonsterCard key={monster.id} monster={monster} filteredBy={filteredBy} searchField={searchField} {...monster} />
            <MonsterModal key={'m' + monster.id} monster={monster} {...monster}/>
          </div>
        )
      })}
        
        
    </div>
  )
}

  


export default MonstersList;