import React from 'react';
import {IState as IProps} from '../App'
// interface IProps{
//     people:{
//       name:string,
//       age:number,
//       url:string,
//       note?:string // with the ? note is optional
//     }[] // a type of array
//   }

  // we just can import this interface from the parent component, and it's worked
  // interface is always used with props in tsx

const List:React.FC<IProps> = ({people}) => { // instead of {people}:IProps

    // const renderList = ()=> {
    //     return people.map((person) => {
    //       <li className='List'>
    //           <div className='List-header'>
    //             <img src={person.url} className='List-img' alt=""/>
    //             <h2>{person.name}</h2>
    //           </div>
    //           <p>{person.age}</p>
    //           <p className='List-note'>{person.note}</p>
    //       </li>
    //     })
    // }
    // the function above should return a JSX.Element[] so that the error will go. Add as well a return function inside the JSX
    const renderList = ():JSX.Element[] => {
        return people.map((person) => {
          return(
            <li className='List'>
            <div className='List-header'>
              <img src={person.url} className='List-img' alt=""/>
              <h2>{person.name}</h2>
            </div>
            <p>{person.age}</p>
            <p className='List-note'>{person.note}</p>
        </li>
          )
        })
    }
    return (
        <ul>
            {/* {people.map((person) => {
              return(
                  <div>{person.name}</div>
              )
            })} */}
            {renderList()}
        </ul>
    );
};

export default List;