import {useState, useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () =>{
  console.log('render and re-render');
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  const onSearchChange = (event)=>{ 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    };

  useEffect(()=>{
    console.log('fetch call');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users)=> setMonsters(users));
  },[]);

  useEffect(()=>{
    const newfilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newfilteredMonsters)
  },[monsters,searchField]);


  return(
    <div className="App">
      <h1 className='app-title'>Monster's Academy</h1>
      <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then((users)=> this.setState(()=>{
  //     return{monsters: users}
  //   }
  //   ));
  // }

  // onSearchChange = (event)=>{ 
  //   // console.log(event.target.value);
  //   const searchField = event.target.value.toLocaleLowerCase();
    
  //     this.setState(()=>{
  //       return {searchField};
  //     });
  //   };

  // render(){
  //   console.log('render from App JS');
  //   const {monsters,searchField} = this.state;
  //   const {onSearchChange} = this;
  //   const filteredMonsters =this.state.monsters.filter((monster)=>{
  //     return monster.name.toLocaleLowerCase().includes(searchField);
  //   });

    // return (
    // <div className="App">
    //   <h1 className='app-title'>Monster's Academy</h1>
    //   <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='Search Monsters'/>
    //   <CardList monsters={filteredMonsters}/>
    // </div>
    // );
//   }
// }

export default App;

