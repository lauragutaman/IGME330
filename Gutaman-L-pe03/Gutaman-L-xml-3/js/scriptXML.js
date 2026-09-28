const loadXMLFile = () => {
    fetch('./data/pet-names.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(xmlString => {
            console.log('Success:', xmlString);

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            console.log('Parsed XML:', xmlDoc);

            // Guard code
            if (xmlDoc.querySelector('parsererror')) {
                throw new Error('XML parsing error - check your XML file format');
            }

            console.log('XML parsed successfully');

            const namelists = xmlDoc.querySelectorAll('namelist');
            console.log('namelists:', namelists);

            let dogHTML = '';
            let catHTML = '';

            namelists.forEach(namelist => {
                const cid = namelist.getAttribute('cid');
                console.log(' categories:', cid);

                const namesText = namelist.textContent;
                const names = namesText.split(',');

                const listHTML = `<ol>${names.map((name) => `<li>${name}</li>`).join("")}</ol>`;

                if (cid === 'dognames') {
                    dogHTML = `<h3>Dog Names</h3>${listHTML}`;
                } else if (cid === 'catnames') {
                    catHTML = `<h3>Cat Names</h3>${listHTML}`;
                }
            });

            document.querySelector('#output').innerHTML = dogHTML + catHTML;
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector('#output').innerHTML = `<p>Error loading file: ${error.message}</p>`;
        });
};

document.querySelector('#my-button').addEventListener('click', loadXMLFile);