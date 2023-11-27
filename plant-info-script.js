document.addEventListener('DOMContentLoaded', function() {
    const pestsButton = document.getElementById('pests-button');
    const weedsButton = document.getElementById('weeds-button');
    const commonPestList = document.querySelector('.info-box');


    const pestsData = [
        {
            name: "Aphids",
            image: "plant-info-images/aphid.jpg",
            destination: "pest_results.html", // Destination page for Aphids
        },
        {
            name: "Stem and Bulb Nema",
            image: "plant-info-images/stem-bulb.jpg",
            destination: "pest_results.html", // Destination page for Stem and Bulb Nematode
        },
        {
            name: "Onion Fly",
            image: "plant-info-images/onion-fly.jpg",
            destination: "pest_results.html", // Destination page for Onion Fly
        },
    ];

const weedsData = [
    {
        name: "Wild Mustard",
        image: "plant-info-images/wild-mustard.jpeg",
        destination: "pest_results.html",

    },
    {
        name: "Barnyard Grass",
        image: "plant-info-images/barnyard-grass.jpg",
        destination: "pest_results.html",
    },
    {
        name: "Field Bindweed",
        image: "plant-info-images/field-bindweed.jpg",
        destination: "pest_results.html",

    },

];

pestsButton.addEventListener('click', function() {
    showContent(pestsData);

    pestsButton.style.backgroundColor = '#4CAF50';
    pestsButton.style.color = '#fff';

    weedsButton.style.backgroundColor = '#fff';
    weedsButton.style.color = '#000';

});

weedsButton.addEventListener('click', function() {
    showContent(weedsData);

    weedsButton.style.backgroundColor = '#4CAF50';
    weedsButton.style.color = '#fff';

    pestsButton.style.backgroundColor = '#fff';
    pestsButton.style.color = '#000';


});

function showContent(data) {
    commonPestList.innerHTML = ''; // Clear the existing content

    data.forEach(item => {
        const container = document.createElement('div');
        container.className = 'pest';
        container.addEventListener('click', function() {
            redirectToPage(item.destination);
        });

        const image = document.createElement('img');
        image.src = item.image;
        image.className = 'listIcon';

        const name = document.createElement('p');
        name.textContent = item.name;

        container.appendChild(image);
        container.appendChild(name);
        commonPestList.appendChild(container);
    });
}

function redirectToPage(page) {
    window.location.href = page;
}




});
