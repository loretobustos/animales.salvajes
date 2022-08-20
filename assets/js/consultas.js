
let animales = (() => {
    const url = "./animales.json";
    const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data.animales;
    }
    return {getData};
})();

export default animales;