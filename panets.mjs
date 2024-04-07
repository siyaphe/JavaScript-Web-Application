//URL to fetch data
// let request = "https://swapi.dev/api/planets"


//function to fetch data

export async function malia() {
    try {
        const response = await fetch("https://swapi.dev/api/planets");
        const json = await response.json();
        const botContainer = document.querySelector(".planContainer");

        json.results.forEach((element) => {
            const newPlanet = document.createElement('div');
            newPlanet.classList.add('planet');

            const attributes = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population'];
            attributes.forEach(attribute => {
                const div = document.createElement('div');
                div.textContent = `${attribute}: ${element[attribute]}`;
                newPlanet.appendChild(div);
            });

            botContainer.appendChild(newPlanet);
        });
    } catch (error) {
        console.error('Error fetching and displaying news:', error);
        throw error;
    }
}


