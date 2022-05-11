import { useEffect, useState } from "react";
import FilterBy from "./components/filterby";
import MonstersList from "./components/monsters-list";
import SearchBar from "./components/search-bar";
import SortBy from "./components/sortby";
import "./styles.css";
var jp = require("jsonpath");

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredBy, setFilteredBy] = useState('name');
  const [sortBy, setSortBy] = useState('name');
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [sortedMonsters, setSortedMonsters] = useState([]);
  
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
  const updateSort = v => {
    setSortBy(v);
  }
  
  const deriveJPath = f => {
    switch (f) {
      case 'name':
        return '$.name';
      case 'email':
        return '$.email';
      case 'company':
        return '$.company.name';
      case 'phone':
        return '$.phone';
      case 'city':
        return '$.address.city';
      default:
        return '$.name';
    }
  }

  useEffect(() => {
    if(searchField !== '') {
      const jpath = deriveJPath(filteredBy);
      const filtered = monsters.filter(monster => {
        const path = jp.query(monster, jpath);
        return path[0].toLowerCase().includes(searchField.toLowerCase());
        }
      );
      setFilteredMonsters(filtered);
    } else {
      setFilteredMonsters(monsters);
    }
  }, [searchField, monsters, filteredBy]);
  
  useEffect(() => {
    const sortByKey = (array, path) => {
      return array.sort((a, b) => {
          var x = jp.query(a, path)[0].toLowerCase(); 
          var y = jp.query(b, path)[0].toLowerCase();
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
      }
    const sPath = deriveJPath(sortBy);
    const sorted = sortByKey(filteredMonsters, sPath);
    setSortedMonsters([...sorted]);
  }, [sortBy, filteredMonsters]);

  return (
    <div className="App container-xl">
      <div className='row row-cols-2 mt-4'> 
        <SearchBar handleUpdate={updateSearch} />
        <FilterBy filterValue={filteredBy} handleUpdate={updateFilter} />
        <SortBy sortValue={sortBy} handleUpdate={updateSort} />
      </div>
      {
        <MonstersList monsters={Object.keys(sortedMonsters).map(m => sortedMonsters[m])}/>
      }
    </div>
  );
}


