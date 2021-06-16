import React  from 'react';
import Item from './Item'

export default function Lista({items, setItems, filtered})
{
	return(
		<div className="item-container">
			<ul className="lista">
			{filtered.map(item => (
				<Item 
				key={item.id} 
				text={item.text}
				items={items}
				item={item}
				setItems={setItems}
				/>
			))}
			</ul>
		</div>
	)
}