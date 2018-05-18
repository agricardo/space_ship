export const load = (elements, resolve) => {
    let resources = {};
    elements.forEach(elm => {
        let image = new Image();
        image.src = elm.src;
        image.id = elm.id;
        image.onload = function () {
            resources[elm.id] = image;
            resolve(resources);
        }
    });
}