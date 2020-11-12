function findMatches(wordToMatch, beers) {
    return beers.filter(brew => {
        console.log(brew.name, wordToMatch);
        console.log(brew.tagline, wordToMatch);
        console.log(brew.name.toLowerCare().includes(wordToMatch));
        return brew.name.toLowerCare().includes(wordToMatch); 
    });
}

function displayMatches(beers, value) {
    const matchArray = findMatches(value.toLowerCase(), beers);
    const html = matchArray.map(brew => {
        const regex = new RegExp(value, 'gi');
        const beerName = brew.name.repalce(regex, `<span class="hl">${value}</span>`);
        const taglineName = brew.tagline.replace(regex, `<span class="hl">${value}</span>`);
        return `
        <li>
          <span class="name">${beerName}</span>
          <span class="tagline">${taglineName}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }

  const searchInput = document.querySelector('.search-input');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('click', () => {
    const endpoint = 'https://api.punkapi.com/v2/beers?food=' + searchInput.value;
  
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => {
        console.log('response from API');
        console.log(data);
        if (!data.Error) displayMatches(data.Search, searchInput.value);
       });
  });