var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

this.solutionResults = function() {
    var solution_id = parseInt(getUrlParameter("id"));
    if (isNaN(solution_id) || solution_id > solutions.length || solution_id <= 0) {
        solution_id = 1;
    }

    const base = document.getElementById("solutionContents");
    const solutionDisplay = document.createElement("div");
    solutionDisplay.classList.add('solutionImage');
    base.appendChild(solutionDisplay);
    
    const solutionTitle = document.createElement("div");
    solutionTitle.classList.add('solutionTitle');
    solutionTitle.innerHTML = solutions[solution_id-1]['name'];
    solutionDisplay.appendChild(solutionTitle);

    const solutionImage = document.createElement("img");
    solutionImage.setAttribute('src', solutions[solution_id-1]['img']);
    solutionImage.setAttribute('width', '150');
    solutionDisplay.appendChild(solutionImage);

    const solutionDescription = document.createElement("div");
    solutionDescription.classList.add('solutionDescription');
    base.appendChild(solutionDescription);

    const desc1 = document.createElement("p");
    desc1.innerHTML = solutions[solution_id-1]['desc1'];
    solutionDescription.appendChild(desc1);
    solutionDescription.appendChild(document.createElement("br"));

    const desc2 = document.createElement("p");
    desc2.innerHTML = solutions[solution_id-1]['desc2'];
    solutionDescription.appendChild(desc2);
    solutionDescription.appendChild(document.createElement("br"));

    const desc3 = document.createElement("p");
    desc3.innerHTML = solutions[solution_id-1]['desc3'];
    solutionDescription.appendChild(desc3);
    // <div class="solutionContents">
    //     <!--div class="solutionImage">
    //         <div class="solutionTitle">
    //             Neem Oil
    //         </div>
    //         <img src="images/neemOil.jpg" width="150">
    //     </div>
    //     <div class="solutionDescription">
    //         <p>Naturally occurring pesticide found in seeds.</p><br>
    //         <p>Repels many insects such as ants, beetles, and caterpillars.</p><br>
    //         <p>To use: Dilute in water and spray.</p>
    //     </div-->
    // </div-->
}