
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let div = document.querySelector('div')
let ul = document.querySelector('ul')
let select = document.querySelector('select')

fetch(imgUrl)
.then( resp => resp.json() )
.then( images => handleImages(images) )

fetch(breedUrl)
.then( resp => resp.json() )
.then( breed => handleBreeds(breed) )


function handleImages(images){
  
  for (const img of images.message){
    let elem = document.createElement('img')
    elem.src = img
    div.appendChild(elem)

  }
}

function handleBreeds(breed){

  let razas = Object.keys(breed.message)
  for (const raza of razas){
    let elem = document.createElement('li')
    elem.addEventListener("click", elem => elem.target.style.color = '#C74343')
    elem.innerHTML = raza
    ul.appendChild(elem)
  }

  ul.childNodes[0].remove()

  select.addEventListener('change', function(){

    let hidden = document.getElementsByClassName('hidden')
    if (hidden.length > 0){
      for ( const i of hidden){
        i.style.display = 'list-item'
      }

      for ( const i of hidden){
        i.className = ''
      }
    }
    
    ul.childNodes.forEach( aux => {
      if (aux.innerHTML[0] === this.value){
        aux.style.display = 'none'
        aux.className = 'hidden'
      }
    })

  
  })
}