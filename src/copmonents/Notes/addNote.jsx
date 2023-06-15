import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNote } from "../../redux/reducers/notesSlice"
import './Note.css'

const AddNote = () => {
   const [value,setValue] = useState('')
   const dispatch = useDispatch()

   const [color, setColor] = useState('#ffe9e3');


   const onSubmit = () => {
      dispatch(addNote({note: value,color: color}))
      setValue('')
   }

   const colorChange = (e) => {
      setColor(e.target.dataset.color);
    }

    const colorList = [
      { value: '#fafafa', label: 'Чорний' },
      { value: '#ffe9e3', label: 'Червоний' },
      { value: '#c4c1e0', label: 'Синій' },
      { value: '#7c73e6', label: 'Зелений' },
    ]

    const colorItems = colorList.map((colorOption) => (
      <li
        key={colorOption.value}
        data-color={colorOption.value}
        style={{ backgroundColor: colorOption.value }}
        onClick={colorChange}
        className="li-but"
      >
        
      </li>
    ))
   

   return (
      <div className="add-note">
         <textarea value={value} onChange={(e)=> {setValue(e.target.value)}}  cols="50" rows="5"></textarea>
         <div className="optionChage">
            <button className="but-add" onClick={onSubmit}>Add</button>
            <ul className="ul-item">
               {colorItems}
            </ul>
         </div>

      </div>
   )
}

export default AddNote