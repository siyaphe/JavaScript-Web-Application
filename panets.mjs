//URL to fetch data
// let request = "https://swapi.dev/api/planets"


//function to fetch data

export async function mySprints() {
    try {
        const response = await fetch("https://swapi.dev/api/planets");
        const json = await response.json();
        const botContainer = document.querySelector(".planContainer");

        json.results.forEach((element) => {
            const newPeople = document.createElement('div');
            newPeople.classList.add('person');

            const attributes = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];
            attributes.forEach(attribute => {
                const div = document.createElement('div');
                div.textContent = `${attribute}: ${element[attribute]}`;
                newPeople.appendChild(div);
            });

            newContainer.appendChild(newPeople);
        });
    } catch (error) {
        console.error('Error fetching and displaying news:', error);
        throw error;
    }
}


