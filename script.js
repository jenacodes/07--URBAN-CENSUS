const dataUrl = 'https://raw.githubusercontent.com/iamspruce/intro-d3/refs/heads/main/data/nigeria-states.json';

const cities = [];

fetch(dataUrl)
    .then(response => {
        return response.json(); // Parse JSON data
    })
    .then(data => {
        // Loop through each state in the data array
        data.data.forEach(state => {
            if (state.info) {
                cities.push(state.info); // Add the Capital to the cities array
            }
        });
    });

function findWordMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return ((place.officialName && place.officialName.match(regex)) || (place.Capital && place.Capital.match(regex)));
    });
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
    const matchArray = findWordMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const StateName = place.officialName.replace(regex, `<span class="hl">${this.value}</span>`);
        const CapitalName = place.Capital.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${StateName}, ${CapitalName}</span>
                <span class="population">${numberWithCommas(place.Population)}</span>
            </li>
        `;
    }).join('');

    suggestions.innerHTML = html;


}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
