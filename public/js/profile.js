const createRecipeHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim().split(',');
    const directions = document.querySelector('#directions').value.trim().split(',');
  
    if (title && description && ingredients && directions) {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, directions }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Oh no! Your recipe burned. Try to cook up another one!');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete that recipe.');
      }
    }
  };
  
  document.querySelector('.new-recipe-form').addEventListener('submit', createRecipeHandler);
  document.querySelector('.recipe-list').addEventListener('click', delButtonHandler);
  