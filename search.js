// for moving from search page to info pages

$(document).on('click', ".pest", function (evt) {
    console.log(this);
    var pestName = this.children[1].innerHTML;
    console.log(pestName);
    matchTextWithData(pestName);
    window.location.href = "pest_results.html";
});

// $(document).on('click', "href", function (evt) {
//     console.log(this);
// });

// $(document).on('click', ".listWeed", function (evt) {
//     /* Take the user to the pest info page */
//     console.log("on to the pest page");
// });

// $(document).on('click', ".listPest", function (evt) {
//     /* Take the user to the pest info page */
//     console.log("on to the pest page");
// });
