import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import Header from './Header';
import itemData from '../data/items';

function App() {
   const [items, setItems] = useState(itemData);
   const [darkMode, setDarkMode] = useState(true);

   function handleDarkMode() {
      setDarkMode(!darkMode);
   }

   function handleItemForm(newItem) {
      setItems([...items, newItem]);
   }

   return (
      <div className={'App ' + (darkMode ? 'dark' : 'light')}>
         <Header darkMode={darkMode} onDarkModeClick={handleDarkMode} />
         <ShoppingList items={items} onItemFormSubmit={handleItemForm} />
      </div>
   );
}

export default App;
