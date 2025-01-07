async function fetchTypes() {
    const response = await fetch('http://localhost:3000/types');
    const types = await response.json();
    displayTypes(types);
  }
  
  function displayTypes(types) {
    const app = document.getElementById('app');
    app.innerHTML = '';
  
    types.forEach((type) => {
      const card = document.createElement('div');
      card.classList.add('type-card');
      card.style.backgroundColor = `#${type.color}`;
      card.innerHTML = `<h2>${type.name}</h2>`;
      app.appendChild(card);
    });
  }
  
  fetchTypes();