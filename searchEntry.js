
class SearchEntry {
    constructor(
        name,
        image
    ) {
        this.name = name;
        this.image = image;
        this.entry = `
            <div class = "searchItem">
                <p class= "searchText">${this.name}</p>
                <img src="${this.image}" class= "searchItemIcon">
            </div>
            `;
    }
}
