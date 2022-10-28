import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItem, setMenuItem] = useState(items);

  const allCategories =["all",...new Set(items.map((category) => category.category))];

  const filterMenu = (category) => {
    if(category === "all"){
      setMenuItem(items)
      return;
    }
    let newItems = items.filter((menu) => menu.category === category);
    setMenuItem(newItems);
    console.log(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div>
          <h2 className='title'>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenu={filterMenu} categories={allCategories}/>
        <Menu menuItems={menuItem} />
      </section>
    </main>
  )
}

export default App;
