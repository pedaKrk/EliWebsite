async function fetchMenu() {
    try {
        const response = await fetch('menu/menu.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        for (const key in data) {
            document.getElementById('menu-items').appendChild(createMenuElement(key, data[key]));
        }
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function createMenuElement(key, data) {
    let card = document.createElement('div');
    card.className = "card p-4 text-center mb-4 mt-5 border border-dark rounded-4";

    let cardHeader = document.createElement('div');
    cardHeader.className = "m-4";

    let header = document.createElement('h3');
    header.innerText = key;

    cardHeader.appendChild(header);
    card.appendChild(cardHeader);

    let border = document.createElement('div');
    border.className = "line mx-5 mb-4"

    card.appendChild(border)

    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    
    for(let element in data){
        let p = document.createElement('p');
        p.innerText = data[element];
        cardBody.appendChild(p);
    };
 
    card.appendChild(cardBody);

    return card;
}

fetchMenu();