import React, {useState, useEffect}  from 'react';
import "./App.css";
import Campos from './components/Campos'
import Lista from './components/Lista'

export function App()
{   
	const[inputText, setInputText] = useState("");
	const[items, setItems] = useState([]);
	const [status, setStatus] = useState('todas');
	const [filtered, setFiltered] = useState([]);

	useEffect(() =>
	{
		getFromLocalStorage();
	}, []);

	useEffect(() =>
	{
		filterHandler();
		saveInLocalStorage();
	}, [items, status]);

	const filterHandler = () => {
		switch(status)
		{
			case 'completadas':
				setFiltered(items.filter((item) => item.completed === true))
				break;
			case 'incompletas':
				setFiltered(items.filter((item) => item.completed === false))
				break;
			default:
				setFiltered(items);
				break;
		}
	}
	const saveInLocalStorage = () =>
	{
		localStorage.setItem("items", JSON.stringify(items));
	}

	const getFromLocalStorage = () =>
	{
			if(localStorage.getItem("items") === null)
		{
			localStorage.setItem("items", JSON.stringify([]));
		}else
		{
			let itemsLocal = JSON.parse(localStorage.getItem("items"));
			setItems(itemsLocal);
		}
	}
	return (
		<div className="App">
        <header>
			<h1>Lista de tareas</h1>
		</header>
		<Campos 
		inputText={inputText} 
		setInputText={setInputText} 
		items={items} 
		setItems={setItems}
		setStatus={setStatus}
		/>
		<Lista 
		items={items} 
		setItems={setItems}
		filtered={filtered}
		/>
		</div>
	)
	}