var searchMap = new Map();
searchMap.set("Aphids", ["Aphid", "Pest", "plant-info-images/aphid.jpg", "Small sap-sucking insect.",
    "Usually harmless.", "Severe cases may cause yellowed folliage, twisted leaves, and poor plant growth."]);
searchMap.set("Barnyard Grasses", ["Barnyard Grass", "Weed", "plant-info-images/barnyard-grass.jpg", "Barnyard Grass description", "description2", "description3"]);
searchMap.set("Cicadas", ["Cicada", "Pest", "images/cicada.jpg", "cicade description", "description2", "description3"]);
searchMap.set("Common Ragweeds", ["Common Ragweed", "Weed", "images/ragWeed.jpg", "rag weeds description", "description2", "description3"]);
searchMap.set("Crabgrass", ["Crabgrass", "Weed", "images/crabGrass.jpg", "Crabgrass description", "description2", "description3"]);
searchMap.set("Dandelions (Plant)", ["Dandelion", "Plant", "images/dandelions.jpg", "dandelion plant description", "description2"]);
searchMap.set("Dandelions (Weed)", ["Dandelion", "Weed", "images/dandelions.jpg", "dandelion weed description", "description2", "description3"]);
searchMap.set("Field Bindweeds", ["Field Bindweed", "Weed", "plant-info-images/field-bindweed.jpg", "Field Bindweeds description", "description2", "description3"]);
searchMap.set("Japanese Beetles", ["Japanese Beetle", "Pest", "images/japaneseBeetle.jpg", "Beetle description", "description2", "description3"]);
searchMap.set("Neem Oil", ["Neem Oil", "Solution", "images/neemOil.jpg", "neem oil description", "description2", "description3"]);
searchMap.set("Onions", ["Onion", "Plant", "plant-info-images/onion-icon.jpg", "onion description", "description2"]);
searchMap.set("Onion Flies", ["Onion Fly", "Pest", "plant-info-images/onion-fly.jpg", "onion fly description", "description2", "description3"]);
searchMap.set("Prostrate Knotweeds", ["Prostrate Knotweed", "Weed", "images/prostrateKnotweed.jpg", "prostrate knotweeds description", "description2", "description3"]);
searchMap.set("Rabbits", ["Rabbit", "Pest", "images/rabbit.jpg", "Rabbits description", "description2", "description3"]);
searchMap.set("Radish", ["Radish", "Plant", "plant-info-images/onion-icon.jpg", "Radish description", "description2"]);
searchMap.set("Slugs", ["Slug", "Pest", "images/slug.jpg", "Slug description", "description2", "description3"]);
searchMap.set("Stem and Bulb Nems", ["Stem and Bulb Nem", "Pest", "plant-info-images/stem-bulb.jpg", "Stem and Bulb Nem description", "description2", "description3"]);
searchMap.set("Wild Mustards", ["Wild Mustard", "Weed", "plant-info-images/wild-mustard.jpeg", "Wild Mustard description", "description2", "description3"]);

var iconMap = new Map();
iconMap.set("Pest", "images/pest.png");
iconMap.set("Weed", "images/weed.png");
iconMap.set("Plant", "images/plant.png");
iconMap.set("Solution", "images/solution.png");

class PestWeedPageInfo {
    constructor(
        name,
        image,
        description1,
        description2,
        description3
    ) {
        this.name = name;
        this.image = image;
        this.description1 = description1;
        this.description2 = description2;
        this.description3 = description3;
    }
}

class PlantPageInfo {
    constructor(
        name,
        image,
        description1,
        description2,
    ) {
        this.name = name;
        this.image = image;
        this.description1 = description1;
        this.description2 = description2;
    }
}

class SolutionPageInfo {
    constructor(
        name,
        image,
        description1,
        description2,
        description3
    ) {
        this.name = name;
        this.image = image;
        this.description1 = description1;
        this.description2 = description2;
        this.description3 = description3;
    }
}

function matchTextWithData(_text) {
    let iterator = searchMap.keys();
    let found = false;
    searchMap.forEach((key) => {
        let actualKey = iterator.next().value;
        if ((actualKey.substr(0, _text.length).toUpperCase() == _text.toUpperCase() ||
            _text.substr(0, actualKey.length).toUpperCase() == actualKey.toUpperCase()) &&
            !found) {
            sessionStorage.setItem("currentPageInfo", key[0]);
            console.log(actualKey);
            found = true;
            return;
        }
    });
}

/* creating an object for each unique plant/pest/weed/solution */
var pageMap = new Map();
let iterator = searchMap.keys();
searchMap.forEach((key) => {
    switch (key[1]) {
        case "Plant":
            pageMap.set(key[0], new PlantPageInfo(key[0], key[2], key[3], key[4]));
            break;
        case "Solution":
            pageMap.set(key[0], new SolutionPageInfo(key[0], key[2], key[3], key[4], key[5]));
            break;
        default:
            pageMap.set(key[0], new PestWeedPageInfo(key[0], key[2], key[3], key[4], key[5]));
    }
});
