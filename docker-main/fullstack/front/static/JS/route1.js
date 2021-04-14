const stationsList = document.getElementById('stationsList');
const searchBar = document.getElementById('searchBar');
let hpStations = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredStations = hpStations.filter((stations) => {
        return (
            stations.station.toLowerCase().includes(searchString)
            // stations.heureDeDepart.toLowerCase().includes(searchString)
        );
    });
    displayStations(filteredStations);
});

const loadStations = async () => {
    try {
        const res = await fetch('http://localhost:5000/city/next/');
        hpStations = await res.json();
        displayStations(hpStations);
    } catch (err) {
        console.error(err);
    }
};

const displayStations = (stations) => {
    const htmlString = stations
        .map((stations) => {
            return `
            <div class="bordure"></div>
            <div class="stations">
                <h2>${stations.station}</h2>
            </div>
        `;
        })
        .join('');
    stationsList.innerHTML = htmlString;
};

loadStations();