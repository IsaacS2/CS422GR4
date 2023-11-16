document.addEventListener('DOMContentLoaded', function() {
    const pestsButton = document.getElementById('pests-button');
    const weedsButton = document.getElementById('weeds-button');
    const commonPestList = document.querySelector('.commonPestList');


    const pestsData = [
        {
            name: "Aphids",
            image: "plant-info-images/aphid.jpg",
            destination: "aphids-page.html", // Destination page for Aphids
        },
        {
            name: "Stem and Bulb Nema",
            image: "plant-info-images/stem-bulb.jpg",
            destination: "aphids-page.html", // Destination page for Stem and Bulb Nematode
        },
        {
            name: "Onion Fly",
            image: "plant-info-images/onion-fly.jpg",
            destination: "aphids-page.html", // Destination page for Onion Fly
        },
    ];

const weedsData = [
    {
        name: "Wild Mustard",
        image: "plant-info-images/wild-mustard.jpeg",
        destination: "aphids-page.html",

    },
    {
        name: "Barnyard Grass",
        image: "plant-info-images/barnyard-grass.jpg",
        destination: "aphids-page.html",
    },
    {
        name: "Field Bindweed",
        image: "plant-info-images/field-bindweed.jpg",
        destination: "aphids-page.html",

    },

];

pestsButton.addEventListener('click', function() {
    showPests(pestsData);

    pestsButton.style.backgroundColor = '#4CAF50';
    pestsButton.style.color = '#fff';

    weedsButton.style.backgroundColor = '#fff';
    weedsButton.style.color = '#000';

});

weedsButton.addEventListener('click', function() {
    showWeeds(weedsData);

    weedsButton.style.backgroundColor = '#4CAF50';
    weedsButton.style.color = '#fff';

    pestsButton.style.backgroundColor = '#fff';
    pestsButton.style.color = '#000';


});

function showPests(pests) {
    commonPestList.innerHTML = ''; // Clear the existing content

    pests.forEach(pest => {
        const pestItem = document.createElement('div');
        pestItem.className = 'pest';

        const pestLink = document.createElement('a');  // anchor element
        pestLink.href = pest.destination;

        const pestImage = document.createElement('img');
        pestImage.src = pest.image;
        pestImage.className = 'listIcon';

        const pestName = document.createElement('p');
        pestName.textContent = pest.name;

        pestLink.appendChild(pestImage);
        pestLink.appendChild(pestName);

        pestItem.appendChild(pestLink);
        commonPestList.appendChild(pestItem);
    });
}

function showWeeds(pests) {
    commonPestList.innerHTML = ''; // Clear the existing content

    pests.forEach(pest => {
        const pestItem = document.createElement('div');
        pestItem.className = 'pest';

        const pestLink = document.createElement('a');  // anchor element
        pestLink.href = pest.destination; // destination page url

        const pestImage = document.createElement('img');
        pestImage.src = pest.image;
        pestImage.className = 'listIcon';

        const pestName = document.createElement('p');
        pestName.textContent = pest.name;

        pestLink.appendChild(pestImage);
        pestLink.appendChild(pestName);
        
        pestItem.appendChild(pestLink);
        commonPestList.appendChild(pestItem);
    });
}


});