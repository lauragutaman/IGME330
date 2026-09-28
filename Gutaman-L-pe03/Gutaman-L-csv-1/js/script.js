let dogNames = [];
let catNames = [];

const loadCSVFile = () => {
    fetch('./data/pet-names.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text()
        })
        .then(text => {
            console.log('Success:', text);

            const rows = text.split("\n");

            console.log("rows:", rows);
            console.log("dog row:", rows[0]);

            const dogRow = rows[0];
            dogNames = dogRow.split(",");

            console.log("array:", dogNames);
            console.log("array length:", dogNames.length)

            // Cat row 

            const catRow = rows[1];
            catNames = catRow.split(",");

            console.log("cat array:", catNames);
            console.log("cat length:", catNames);

            const dogHTML = `<h3>Dog Names</h3><ol>${dogNames.map((name) => `<li>${name}</li>`).join(" ")}</ol>`;

            const catHTML = `<h3>Cat Names</h3><ol>${catNames.map((name) => `<li>${name}</li>`).join(" ")}</ol>`;

            document.querySelector('#output').innerHTML = dogHTML + catHTML;



            // TODO: You implement the parsing and display code here!
            // See step-by-step instructions below
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector('#output').innerHTML = `<p>Error loading file: ${error.message}</p>`;
        });
};

document.querySelector('#my-button').addEventListener('click', loadCSVFile);


