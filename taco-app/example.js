/searching a movie api

  function findMatches(wordToMatch, movies) {
    return movies.filter(film => {
      console.log(film.Title, wordToMatch);
      console.log(film.Title.toLowerCase().includes(wordToMatch));
      return film.Title.toLowerCase().includes(wordToMatch) || film.Year.toLowerCase().includes(wordToMatch);
    });
  }

  function displayMatches(movies, value) {
    const matchArray = findMatches(value.toLowerCase(), movies);
    const html = matchArray.map(film => {
      const regex = new RegExp(value, 'gi');
      const titleName = film.Title.replace(regex, `<span class="hl">${value}</span>`);
      const yearName = film.Year.replace(regex, `<span class="hl">${value}</span>`);
      return `
        <li>
          <span class="name">${titleName}, ${yearName}</span>
          <span class="population">${film.imdbID}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('keyup', () => {
  const endpoint = 'https://www.omdbapi.com/?apikey=63f88e02&s=' + searchInput.value;

  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => {
      console.log('response from API');
      console.log(data);
      if (!data.Error) displayMatches(data.Search, searchInput.value);
     });
});