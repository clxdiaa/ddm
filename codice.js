const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');

// Function to create grid
function createGrid(size) {
  // Clear the existing grid
  container.innerHTML = '';

  // Adjust the CSS flex-basis and height to fit the new grid size
  const squareSize = 960 / size;

  // Create grid squares dynamically
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-square');
    div.style.flexBasis = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    // Hover effect to change background color
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'lightblue';
    });

    container.appendChild(div);
  }
}

// Initial 16x16 grid
createGrid(16);

// Handle button click for resizing grid
resizeButton.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  
  if (newSize !== null) {
    newSize = parseInt(newSize);
    
    // Validate the input to ensure it's between 1 and 100
    if (newSize > 0 && newSize <= 100) {
      createGrid(newSize);
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  }
});
