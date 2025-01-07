async function fetchTypes() {
    const response = await fetch('http://localhost:3000/types');
    const types = await response.json();
    displayTypes(types);
  }
  
  function displayTypes(types) {
    const container = document.getElementById('app');
    container.innerHTML = '';
  
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add(
      'is-flex',
      'is-flex-wrap-wrap',
      'is-justify-content-center'
    );
  
    types.forEach((type) => {
      const button = document.createElement('button');
      button.classList.add('button', 'type-button');
      button.style.backgroundColor = `#${type.color}`;
      button.textContent = type.name;
      buttonsContainer.appendChild(button);
    });
  
    container.appendChild(buttonsContainer);
  }
  
  fetchTypes();