$(document).on('mousedown', ".cookieColumn div a", function (evt) {
    console.log(this);
    var pestName = this.innerHTML;
    console.log(pestName);
    matchTextWithData(pestName);
});