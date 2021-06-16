import React  from 'react';

export default function Item({text, item, items, setItems})
{
	const deleteHandler = () =>
	{
		setItems(items.filter((el) => el.id !== item.id));
	}
	const completeHandler = () =>
	{
		setItems(items.map((el) => {
			if(el.id === item.id)
			{
				return{
					...el, completed: !el.completed
				}
			}
			return el;
		}));
	}
	
 return(
	 <div className="items">
		 <div className="botonCompletar" onClick={completeHandler}>
			 <li className={`ìtem ${item.completed ? "completed" : ""}`}>{text} </li>
			 <i className="boton-com"></i>
		 </div>
		 <button  className="botonEliminar" onClick={deleteHandler}>
			 Borrar
			 <i className="boton-el"></i>
		 </button>
	 </div>
 )
}
