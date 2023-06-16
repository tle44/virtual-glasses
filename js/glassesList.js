export class GlassesList {
    constructor() {
        this.gList = [];
    }

    addGlasses(glasses) {
        this.gList.push(glasses);
    }

    renderGlasses() {
        let content = "";

        content = this.gList.reduce((gContent, item, index) => {
            gContent += `<div class = "col-4">

                <img class = "img-fluid glsItem" onclick="tryOnGlasses(event)" data-id="${item.id}" src ="${item.src}" alt="Glasses">
            </div>`;

            return gContent;
        }, "");

        return content;
    }
}
