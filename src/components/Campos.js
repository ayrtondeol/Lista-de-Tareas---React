import React  from 'react';

 export default function Campos({inputText, setInputText, items, setItems, setStatus})
{
	const inputTextHandler = (e) =>
	{
		setInputText(e.target.value);
	} 
	const submitHandler = (e) =>
	{
		e.preventDefault();
		if(inputText=="")
		{
			return;
		}
		else
		{
			setItems([
			...items, {text: inputText, completed: false, id: Math.random()}
		]);
		}
		setInputText("");

	}
	const statusHandler = (e) =>
	{
		setStatus(e.target.value);
	}
	return (
		 <form>
      <input value={inputText} type="text" className="input" onChange={inputTextHandler}/>
      <button className="botonSubmit"  onClick={submitHandler}>
		  <p>
		  Agregar
		  </p>
        <i className="boton"></i>
      </button>
      <div className="select">
        <select name="listado" className="filter" onChange={statusHandler}>
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="incompletas">Sin completar</option>
        </select>
      </div>
    </form>

	)
}

