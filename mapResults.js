this.updateResults = function() {
    var current_location = new google.maps.LatLng(Number(41.867), Number(-87.647));
    // var store_results = [home_depot1, lowes];

    const result_list = document.getElementById("mapResults");
    stores.forEach(item => {
        var store_location = new google.maps.LatLng(item.lat, item.lng);
        console.log(current_location.toString());
        console.log(store_location.toString());
        console.log(typeof current_location, typeof store_location);
        const distance_in_meters = google.maps.geometry.spherical.computeDistanceBetween(current_location, store_location);
        const distance_in_miles = distance_in_meters * 0.000621371192;
        const base = document.createElement("div");
        const mapPinDiv        = document.createElement("div");
        mapPinDiv.classList.add('mapPin');
        const pinImg = document.createElement('img');
        pinImg.setAttribute('src', 'images/mapPin.png')
        mapPinDiv.appendChild(pinImg);
        base.appendChild(mapPinDiv);

        const storeTitleDiv    = document.createElement("div");
        storeTitleDiv.classList.add('storeTitle');
        storeTitleDiv.innerHTML = item.name;
        base.appendChild(storeTitleDiv);

        const storeDistanceDiv = document.createElement("div");
        storeDistanceDiv.classList.add('storeDistance');
        storeDistanceDiv.innerText = distance_in_miles.toFixed(2).toString() + " mi";
        base.appendChild(storeDistanceDiv);

        const storePriceDiv    = document.createElement("div");
        storePriceDiv.classList.add('storePrice');
        base.appendChild(storePriceDiv);

        result_list.appendChild(base);
        /*
        <div class="mapPin"><img src="images/mapPin.png"></div>
        <div class="storeTitle">Lowe's Home Improvement</div>
        <div class="storeDistance">0.6 mi</div>
        <div class="storePrice">$12.99</div>*/
    });
}