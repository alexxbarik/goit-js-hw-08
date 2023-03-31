// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// console.log(`hello`);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(`.gallery`);


// *створює картинки по шаблону
function createCardMarkup (galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<li><a class="gallery__item" href ="${original}">
        <img class ="gallery__img" src="${preview}"  
        alt="${description}"></a></li>`;
    }).join(` `);
    return 
}
// *додає створені картинки до галереї
const cardsMarkup = (createCardMarkup(galleryItems));
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);


// ! вибачте, але я так і недопер як скористатися функцією, як ви писали у коментарі, 
// !якщо можна киньте приклад будьласка, бо дуже цікаво.
// !у 1 завданні потрібно використати функцію зворотнього виклику (callback), 
// !яка отримує об'єкт події та змінює властивість captionsData об'єкта на alt, 
// !для цього у 29 рядку передайте парамет до ф-ції і передайте його для параметр.captionsData = "alt";
// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function (evt) {
//     captionsData: `alt`
//     captionPosition: `bottom`
//     captionDelay: 250
// });

const lightbox = new SimpleLightbox (`.gallery a`,{
	captionsData: `alt`,
    captionPosition: `bottom`,
    captionDelay: 250,
});