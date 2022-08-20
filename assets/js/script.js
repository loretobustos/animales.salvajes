import { Leon, Aguila, Lobo, Oso, Serpiente } from "./animaEspe/Especies.js";

let animales = [];

document.getElementById('btnRegistrar').addEventListener('click', () => {
    let animal = document.getElementById('animal');
    let edad = document.getElementById('edad');
    let comentarios = document.getElementById('comentarios');
    let previewElement = document.getElementById('preview');
    let imagenSrcBg = previewElement.style.backgroundImage;
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length -2);

    let nuevoAnimal;
    if (animal.value == "Leon") { 
        nuevoAnimal = new Leon (animal.value, edad.value, imgSrc, comentarios.value );
    }
    else if (animal.value == "Aguila") {
        nuevoAnimal = new Aguila (animal.value, edad.value, imgSrc, comentarios.value );
    }
    else if (animal.value == "Lobo") {
        nuevoAnimal = new Lobo (animal.value, edad.value, imgSrc, comentarios.value );
    }
    else if (animal.value == "Oso") {
        nuevoAnimal = new Oso (animal.value, edad.value, imgSrc, comentarios.value );
    }
    else if (animal.value == "Serpiente") {
        nuevoAnimal = new Serpiente (animal.value, edad.value, imgSrc, comentarios.value );
    }

    if (animal.value && edad.value && imgSrc && comentarios.value) {
        animales.push(nuevoAnimal);
        animal.selectedIndex = 0
        edad.selectedIndex = 0
        previewElement.style.backgroundImage = "url(../assets/img/lion.svg";
        const preview = document.getElementById("preview");
        preview.parentElement.classList.add("p-5");
        comentarios.value = "";
        reloadTable();
    } 
    else {
        alert("Faltan datos por llenar");
    }
});

const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";
    animales.forEach((p,i) => {
        animalesTemplate.innerHTML+= `
        <div class="px-3 pb-2">
        <div class="bg-dark text-white">
            <img 
            height="200"
            role="button"
            src="${p.getImg()}" 
            data-toggle="modal" data-target="#exampleModal"
            onclick="modalDetails('${i}')"
            />
            <div>
                <button class="btn btn-secondary w-100" onclick="activarSonido('${i}')"> <img height="30" src="assets/imgs/audio.svg" /> </button>
            </div>
        </div>
    </div>`;
    });
}

window.modalDetails = (i) => {
    const modalBody = document.getElementsByClassName("modal-body")[0];
    const animal = animales[i];
    modalBody.innerHTML = `
    <div class="px-3 pb-2">
    <div class="card w-50 m-auto bg-dark text-white border-0">
        <img
            src="${animal.getImg()}" 
            class="d-block m-auto w-100"
        />
        <div class="card-body text-center">
            <h6 class="card-text">${animal.getEdad()}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${animal.getComentarios()}</p>
        </div>
    </div>
</div>`;
}

window.activarSonido = (i) => {
    const animal = animales[i]
    if (animal.getNombre() == "Leon") {
        animal.Rugir();
    } else if (animal.getNombre() == "Aguila") {
        animal.Chillido();
    } else if (animal.getNombre() == "Lobo") {
        animal.Aullido();
    } else if (animal.getNombre() == "Oso") {
        animal.Gruñido();
    } else if (animal.getNombre() == "Serpiente") {
        animal.Siseo();
    }
    reloadTable();
}

