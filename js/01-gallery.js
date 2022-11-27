import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryList = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);

gallery.addEventListener("click", onCartClick);

function createGallery(cardItems) {
  return cardItems
    .map(({ preview, original, description }) => {
      return `
        <div class = "gallery__item">
            <a class= "gallery__link" href="${original}">
                <img
                    class= "gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
             </a>
         </div>           
        `;
    })
    .join("");
}

function onCartClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = "${event.target.dataset.source}" width="800" height="600">`, 
    {
      onShow: () => {
        document.addEventListener("keyup", onEscClose);
      },
      onClose: () => {
        document.removeEventListener("keyup", onEscClose);
      },
    }
  );
  function onEscClose(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
    
  }
  instance.show();
  }