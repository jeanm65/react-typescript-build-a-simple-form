import './App.css';
import {useState} from 'react';
import List from './Components/List';
import AddToList from './Components/AddToList';

export interface IState{
  people:{
    name:string,
    age:number,
    url:string,
    note?:string // with the ? note is optional
  }[] // a type of array
}

const App = () => {
  const[people, setPeople] = useState<IState['people']>([
    {
      name:'Jordan',
      url:'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age:36,
      note:'allergic to staying on the same team'
    }
  ]) // typescript set the state automatically to number
people.map((person) => 
 <ul>{person.age}</ul> 
)

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />

    </div>
  );
}

export default App;
