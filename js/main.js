let dataGlasses = [
    {
        id: "G1",
        src: "./img/g1.jpg",
        virtualImg: "./img/v1.png",
        brand: "Armani Exchange",
        name: "Bamboo wood",
        color: "Brown",
        price: 150,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
    },
    {
        id: "G2",
        src: "./img/g2.jpg",
        virtualImg: "./img/v2.png",
        brand: "Arnette",
        name: "American flag",
        color: "American flag",
        price: 150,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G3",
        src: "./img/g3.jpg",
        virtualImg: "./img/v3.png",
        brand: "Burberry",
        name: "Belt of Hippolyte",
        color: "Blue",
        price: 100,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G4",
        src: "./img/g4.jpg",
        virtualImg: "./img/v4.png",
        brand: "Coarch",
        name: "Cretan Bull",
        color: "Red",
        price: 100,
        description: "In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G5",
        src: "./img/g5.jpg",
        virtualImg: "./img/v5.png",
        brand: "D&G",
        name: "JOYRIDE",
        color: "Gold",
        price: 180,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
    },
    {
        id: "G6",
        src: "./img/g6.jpg",
        virtualImg: "./img/v6.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Blue, White",
        price: 120,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G7",
        src: "./img/g7.jpg",
        virtualImg: "./img/v7.png",
        brand: "Ralph",
        name: "TORTOISE",
        color: "Black, Yellow",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
    },
    {
        id: "G8",
        src: "./img/g8.jpg",
        virtualImg: "./img/v8.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Red, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
    },
    {
        id: "G9",
        src: "./img/g9.jpg",
        virtualImg: "./img/v9.png",
        brand: "Coarch",
        name: "MIDNIGHT VIXEN REMIX",
        color: "Blue, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
    },
];

//import glasses.js and glassesList.js
import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glaList = new GlassesList();

//showGlasses function
const showGlasses = () => {
    //create an object and add to gList
    let divGlassesList = document.getElementById("glsList");
    dataGlasses.map((item, index) => {
        let gl = new Glasses(
            item.id,
            item.src,
            item.virtualImg,
            item.brand,
            item.name,
            item.color,
            item.price,
            item.description
        );
        glaList.addGlasses(gl);
        console.log(gl);
    });

    console.log(glaList.gList);
    divGlassesList.innerHTML = glaList.renderGlasses();
};

//call showGlasses function
showGlasses();

//tryOnGlasses function
const tryOnGlasses = (event) => {
    let gId = event.target.getAttribute("data-id");
    let gObject = {};

    for (let value of glaList.gList) {
        if (gId == value.id) {
            gObject = value;
        }
    }
    showInfo(gObject);
};

//showInfo function
const showInfo = (gObject) => {
    document.getElementById("avatar").innerHTML = `
        <img class ="vGlasses" src = "${gObject.virtualImg}" alt="Glasses">
    `;

    document.getElementById("info").innerHTML = `
        <h5 class="title">${gObject.name} - ${gObject.brand}(${gObject.color})</h5>
        <p><span class="btn btn-danger btn-lg mr-2">$${gObject.price}</span> </p>
        <p>${gObject.description}</p>
    `;
};

window.tryOnGlasses = tryOnGlasses;
