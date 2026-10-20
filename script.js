const photos = [
    { src: "pictures/picture0.jpg", caption: "Sunset" },
    { src: "pictures/picture1.jpg", caption: "Crow" },
    { src: "pictures/picture2.jpg", caption: "Tower" },
    { src: "pictures/picture3.jpg", caption: "Sunrays" }
];
const gallery = document.getElementById("gallery");

photos.forEach(photo => {
    const card = document.createElement("div");
    card.className = "card";
    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.caption;
    const caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = photo.caption;
    card.appendChild(caption);
    card.appendChild(image);
    gallery.appendChild(card);
});

