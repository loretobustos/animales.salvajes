import Animales from "./consultas.js";




document.getElementById('animal').addEventListener('change', async (event) => {
    const animales = await Animales.getData();
    console.log(animales)
    console.log("valor seleccionado", event.target.value);
    const selectedAnimal = document.getElementById('animal').value;

    for (let i = 0; i < animales.length; i++) {
        if (selectedAnimal == animales[i].name) {
           console.log(animales[i].name);
            const imagenSrc = `assets/imgs/${animales[i].imagen}`;
            const preview = document.getElementById("preview");
            preview.parentElement.classList.remove("p-5");
            document.getElementById('preview').style.backgroundImage = `url(${imagenSrc})`;
        }
    }
})