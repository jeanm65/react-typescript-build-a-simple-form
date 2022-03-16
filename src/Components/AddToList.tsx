import React, { useState } from 'react';
import {IState as Props} from '../App';

interface IProps {
    people:Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddToList: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
      name:'',
      age:'',
      note:'',
      img:''
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => { // we don't want this function to return anything
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })
    }

    const handleClick = ():void => {
      if(
          !input.name || !input.age || !input.img ){ 
              return   
          }
          setPeople([
              ...people,
              {
                  name:input.name,
                  age:parseInt(input.age),
                  url:input.img,
                  note:input.note
              }
          ]);
          setInput({
            name:'',
            age:'',
            note:'',
            img:''
          })
    }


    return (
        <div className='AddToList'>
            <input type="text" placeholder='age' className='AddToList-input' value={input.name} onChange={handleChange} name='name'/>

            <input type="text" placeholder='name' className='AddToList-input' value={input.age} name='age' onChange={handleChange}/>

            <input type="text" placeholder='Image url' className='AddToList-input' value={input.img} name='img' onChange={handleChange}/>

            <textarea
                 placeholder='Note' className='AddToList-input' value={input.notes}name='note' onChange={handleChange}/>
            
            <button className='AddToList-btn' onClick={handleClick}>
                Add to List
            </button>
        </div>
    );
};

export default AddToList;
