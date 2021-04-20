class StarRating extends HTMLElement {
    constructor() {
        super();
        // this.attachShadow({mode : "open"});
        // this.shadowRoot.appendChild();
        let got = this.getAttribute('current');
        let outof = this.getAttribute('outof');
        let minof = this.getAttribute('minof');
        let rating = (((+got - +minof) * (5 - 1)) / (+outof - +minof)) + 1;
        console.log("Rating : "+ rating);
        let number = Math.floor(rating);
        var template = '';
        for (let i = 0; i < number; i++) {
            template += `<i class="fa fa-star"></i>`
            // template += `<img class = "data"  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png">`
        }
        if(+rating % 1)
            template += `<i class="fa fa-star-half"></i>`;
        this.innerHTML = template;
    }
}

window.customElements.define('star-rating', StarRating);