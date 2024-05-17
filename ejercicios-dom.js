document.addEventListener("DOMContentLoaded", function() {
    // 1.1 Basándote en el array siguiente, crea una lista ul > li dinámicamente en el HTML que imprima cada uno de los países.
    const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
    const countriesList = document.getElementById('countriesList');
    countries.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = country;
        countriesList.appendChild(listItem);
    });

    // 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
    const elementToRemove = document.querySelector('.fn-remove-me');
    if (elementToRemove) {
        elementToRemove.remove();
    }

    // 1.3 Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div de HTML con el atributo data-function="printHere".
    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
    const printHereDiv = document.querySelector('[data-function="printHere"]');
    const carsList = document.createElement('ul');
    cars.forEach(car => {
        const listItem = document.createElement('li');
        listItem.textContent = car;
        carsList.appendChild(listItem);
    });
    printHereDiv.appendChild(carsList);

    // 1.4 Crea dinámicamente en el HTML una serie de divs que contenga un elemento h4 para el título y otro elemento img para la imagen.
    const countriesWithImages = [
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, 
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
        { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
    ];
    const countriesContainer = document.getElementById('countriesContainer');
    countriesWithImages.forEach(country => {
        const countryDiv = document.createElement('div');
        const title = document.createElement('h4');
        title.textContent = country.title;
        const image = document.createElement('img');
        image.src = country.imgUrl;
        countryDiv.appendChild(title);
        countryDiv.appendChild(image);
        countriesContainer.appendChild(countryDiv);
    });

    // 1.5 Basándote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
    const removeLastButton = document.getElementById('removeLastButton');
    removeLastButton.addEventListener('click', function() {
        const countriesContainer = document.getElementById('countriesContainer');
        const lastDiv = countriesContainer.lastElementChild;
        if (lastDiv) {
            lastDiv.remove();
        }
    });

    // 1.6 Basándote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del HTML.
    const countryDivs = document.querySelectorAll('#countriesContainer div');
    countryDivs.forEach(div => {
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.addEventListener('click', function() {
            div.remove(); // Aquí se elimina el div cuando se hace clic en el botón de eliminar
        });
        div.appendChild(removeButton);
    });