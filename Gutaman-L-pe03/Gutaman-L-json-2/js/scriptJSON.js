const loadJSONFile = () => {
    fetch('./data/pet-names.json')

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Changed from response.text()!
        })
        .then(data => {

            console.log('Success:', data);
            const {dogs, cats, birds} = data.categories; 
            const dogHTML = `<h3>Dog Names</h3><ol>${dogs.map((name) => `<li>${name}</li>`).join("")}</ol>`;
            const catHTML = `<h3>Cat Names</h3><ol>${cats.map((name)=> `<li>${name}</li>`).join("")}</ol>`;
            const birdHTML = `<h3>Bird Names</h3><ol>${birds.map((name)=> `<li>${name}</li>`).join("")}</ol>`;
            document.querySelector('#output').innerHTML = dogHTML + catHTML + birdHTML; 
            // TODO: Add object destructuring and display code here
        })

        .catch(error => {
            console.error('Error:', error);
            document.querySelector('#output').innerHTML = `<p>Error loading file: ${error.message}</p>`;
        });
};

document.querySelector('#my-button').addEventListener('click', loadJSONFile);

