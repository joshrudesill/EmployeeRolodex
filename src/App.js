import { useEffect, useState } from "react";
import FilterBy from "./components/filterby";
import MonstersList from "./components/monsters-list";
import SearchBar from "./components/search-bar";
import "./styles.css";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredBy, setFilteredBy] = useState('name');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const fetchData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    setMonsters(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateSearch = v => {
    setSearchField(v);
  }
  const updateFilter = v => {
    setFilteredBy(v);
  }

  useEffect(() => {
    const deriveFilteredData = f => {
      switch (f) {
        case 'name':
          return monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
            );
        case 'email':
          return monsters.filter(monster => 
            monster.email.toLowerCase().includes(searchField.toLowerCase())
            );
        case 'company':
          return monsters.filter(monster => 
            monster.company.name.toLowerCase().includes(searchField.toLowerCase())
            );
        case 'phone':
          return monsters.filter(monster => 
            monster.phone.toLowerCase().includes(searchField.toLowerCase())
            );
        case 'city':
          return monsters.filter(monster => 
            monster.address.city.toLowerCase().includes(searchField.toLowerCase())
            );
        default:
          return null
      }
    }
    if(searchField !== '') {
      const filtered = deriveFilteredData(filteredBy);
      setFilteredMonsters(filtered);
    } else {
      setFilteredMonsters(monsters);
    }
  }, [searchField, monsters, filteredBy]);

  return (
    <div className="App container-xl">
      <SearchBar handleUpdate={updateSearch} />
      <FilterBy filterValue={filteredBy} handleUpdate={updateFilter}/>
      {
        <MonstersList monsters={Object.keys(filteredMonsters).map(m => filteredMonsters[m])}/>
      }
    </div>
  );
}


