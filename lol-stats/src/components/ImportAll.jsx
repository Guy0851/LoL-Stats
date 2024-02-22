export default function ImportAll(r) {
    let images = {};
    r.keys().forEach(key => {
    const imageName = key.replace('./', ''); // Supprime le chemin './' du nom de fichier
        images[imageName] = r(key);
    });
    return images;
}