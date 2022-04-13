const ramenMenu = document.querySelector('#ramen-menu')
console.log(ramenMenu)

const baseUrl= 'http://localhost:3000/'
fetch(baseUrl + 'ramens')
.then((response)=>response.json())
.then((ramensData)=>renderRamens(ramensData))

function renderRamens(ramens){
    ramens.forEach(ramen =>{
        const img= document.createElement('img')
        img.src = ramen.image
        img.details = ramen
        img.addEventListener('click', updateRamenDetails)
        ramenMenu.append(img)
    })
}

function updateRamenDetails(event){
    const name = document.querySelector('.name')
    const image = document.querySelector('.detail-image')
        image.src = event.target.details.image
    const restaurant = document.querySelector(".restaurant")
    name.replace("Insert Name Here", event.target.details.name)
    image.appendChild(event.target.details.image)
    restaurant.replace("Insert Restaurant Here", event.target.details.restaurant)
}
const ramenForm = document.querySelector('#new-ramen')
ramenForm.addEventListener('submit', createRamen)
function createRamen(e){e.preventDefault()
    const name =document.querySelector('#new-name').value
    const comment = document.querySelector('#new-comment').value
    const ramen = {name,restauraunt,image,rating,comment}

}