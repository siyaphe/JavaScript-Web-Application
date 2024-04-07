// curl --location 'https://api.ebird.org/v2/data/obs/KZ/recent' \
// --header 'X-eBirdApiToken: {{x-ebirdapitoken}}'
// API-key:"v9hgnco290fl"


export async function mybirds(regionCode) {
    try {
        const apiKey = "v9hgnco290fl";
        const response = await fetch(`https://api.ebird.org/v2/data/obs/${regionCode}/recent/notable?key=${apiKey}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch bird observations: ${response.status} ${response.statusText}`);
        }
        
        const json = await response.json();
        const bContainer = document.querySelector(".birdContainer");

        json.forEach((observation) => {
            const newBird = document.createElement('div');
            newBird.classList.add('bird');

            const attributes = [
                'speciesCode',
                'sciName',
                'locId',
                'locName',
                'obsDt',
                'howMany',
                'lng',
                'obsValid',
                'obsReviewed',
                'locationPrivate',
                'subnational1Code',
                'subnational1Name',
                'countryCode',
                'countryName',
            ];

            attributes.forEach(attribute => {
                const div = document.createElement('div');
                div.textContent = `${attribute}: ${observation[attribute]}`;
                newBird.appendChild(div);
            });

            bContainer.appendChild(newBird);
        });
    } catch (error) {
        console.error('Error fetching and displaying bird observations:', error);
        throw error;
    }
}


   