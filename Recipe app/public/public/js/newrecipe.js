const createRecipeHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim().split(',');
    const steps = document.querySelector('#steps').value.trim().split(',');
  
    if (title && description && ingredients && steps) {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, description, ingredients, steps }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.create-recipe-form').addEventListener('submit', createRecipeHandler);
  