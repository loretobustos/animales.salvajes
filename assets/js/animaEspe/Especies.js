import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Rugir() {
        let player = document.getElementById("player")
        player.setAttribute("src", "assets/sounds/Rugir.mp3")
        player.play();
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillido() {
        let player = document.getElementById("player")
        player.setAttribute("src", "assets/sounds/Chillido.mp3")
        player.play();
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullido() {
        let player = document.getElementById("player")
        player.setAttribute("src", "assets/sounds/Aullido.mp3")
        player.play();
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Gruñido() {
        let player = document.getElementById("player")
        player.setAttribute("src", "assets/sounds/Gruñido.mp3")
        player.play();
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Siseo() {
        let player = document.getElementById("player")
        player.setAttribute("src", "assets/sounds/Siseo.mp3")
        player.play();
    }
}

export {Leon, Aguila, Lobo, Oso, Serpiente};