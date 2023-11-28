function showDropdown() {
            const input = document.getElementById('locationInput').value.toLowerCase();
            const dropdown = document.getElementById('locationDropdown');
            const commonPestList = document.getElementById('commonPestList');
            const commonWeedList = document.getElementById('commonWeedList');

            
            // Simulated location data, replace with your actual location data
            const locations = {
                'Chicago, IL, 60609': {
                    pests: [
                        { image: 'images/cicada.jpg', title: 'Cicadas' },
                        { image: 'images/rabbit.jpg', title: 'Rabbits' },
                        { image: 'images/japaneseBeetle.jpg', title: 'Japanese Beetles' },
                        { image: 'images/slug.jpg', title: 'Slugs' },
                    ],
                    weeds: [
                        { image: 'images/crabGrass.jpg', title: 'Crabgrass' },
                        { image: 'images/dandelions.jpg', title: 'Dandelion' },
                        { image: 'images/prostrateKnotweed.jpg', title: 'Prostrate Knotweed' },
                        { image: 'images/ragWeed.jpg', title: 'Common Ragweed' },

                    ]
                    // Add more pest data as needed
                },
                'Naperville, IL': {
                    pests: [
                        { image: 'images/cabbageWorm.jpg', title: 'Cabbage Worm' },
                        { image: 'images/squashBug.jpg', title: 'Squash Bug'},
                        { image: 'images/spiderMites.jpg', title: 'Spider Mite'},
                        { image: 'images/scaleInsect.jpg', title: 'Scale Insect'},
                    ],
                    weeds: [
                        { image: 'images/bindweed.jpg', title: 'Bindweed'},
                        { image: 'images/clover.jpg', title: 'Clover' },
                        { image: 'images/groundIvy.jpg', title: 'Ground Ivy'},
                        { image: 'images/chickweed.jpg', title: 'Chickweed'},

                    ],

                    // Add more pest data as needed
                },
                // Add more locations as needed
                'New York, NY': [],
                'Los Angeles, CA': [],
            };

            // Clear previous dropdown options
            dropdown.innerHTML = '';

            // Filter locations based on user input
            const matchingLocations = Object.keys(locations).filter(location => location.toLowerCase().includes(input));

            // Display matching locations in the dropdown
            matchingLocations.forEach(location => {
                const option = document.createElement('a');
                option.textContent = location;
                option.addEventListener('click', function() {
                    // Set the selected location in the input field
                    document.getElementById('locationInput').value = location;
                    // Hide the dropdown
                    dropdown.style.display = 'none';

                    // Update common pests content based on the selected location
                    updateCommonPests(locations[location].pests, commonPestList);
                    updateCommonWeeds(locations[location].weeds, commonWeedList);

                });
                dropdown.appendChild(option);
            });

            // Show or hide the dropdown based on matching locations
            dropdown.style.display = matchingLocations.length > 0 ? 'block' : 'none';
        }

        function updateCommonPests(pests, commonPestList) {
            // Clear previous pest items
            commonPestList.innerHTML = '';

            // Display new pest items based on the selected location
            pests.forEach(pest => {
                const pestItem = document.createElement('div');
                pestItem.className = 'pest';
                pestItem.innerHTML = `
                    <img src="${pest.image}" class="listIcon listPest">
                    <p class="commonPestTitle">${pest.title}</p>
                `;
                commonPestList.appendChild(pestItem);
            });
        }

        function updateCommonWeeds(weeds, commonWeedList) {
            // Clear previous weed items
            commonWeedList.innerHTML = '';

            // Display new weed items based on the selected location
            weeds.forEach(weed => {
                const weedItem = document.createElement('div');
                weedItem.className = 'pest';
                weedItem.innerHTML = `
                    <img src="${weed.image}" class="listIcon listWeed">
                    <p class="commonPestTitle">${weed.title}</p>
                `;
                commonWeedList.appendChild(weedItem);
            });
        }

        function setDefaultLocation() {
            // Set the location input value to the default location (Chicago, IL)
            document.getElementById('locationInput').value = 'Chicago, IL, 60609';
            
            // Update common pests content based on the selected location
            const commonPestList = document.getElementById('commonPestList');
            const commonWeedList = document.getElementById('commonWeedList');

            const locations = {
                'Chicago, IL, 60609': {
                    pests: [
                        { image: 'images/cicada.jpg', title: 'Cicadas' },
                        { image: 'images/rabbit.jpg', title: 'Rabbits' },
                        { image: 'images/japaneseBeetle.jpg', title: 'Japanese Beetles' },
                        { image: 'images/slug.jpg', title: 'Slugs' },
                    ],
                    weeds: [
                        { image: 'images/crabGrass.jpg', title: 'Crabgrass' },
                        { image: 'images/dandelions.jpg', title: 'Dandelion' },
                        { image: 'images/prostrateKnotweed.jpg', title: 'Prostrate Knotweed' },
                        { image: 'images/ragWeed.jpg', title: 'Common Ragweed' },

                    ]
                    // Add more pest data as needed
                },
            };
            // Hide the dropdown
            document.getElementById('locationDropdown').style.display = 'none';

             
             updateCommonPests(locations['Chicago, IL, 60609'].pests, commonPestList);
             updateCommonWeeds(locations['Chicago, IL, 60609'].weeds, commonWeedList);
        }
