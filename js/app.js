document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFromSubmit)

})




const handleFromSubmit = function(event){
  event.preventDefault()
  // const list = document.querySelector('#reading-list')
  // list.appendChild(newListItem)
  const locate = document.querySelector('#reading-list')
  const newListItem = document.createElement('li')
  const header = document.createElement('h1')
  header.textContent = `${event.target.title.value}`

  const header2 = document.createElement('h2')
  header2.textContent = `${event.target.author.value}`

  const paragraph = document.createElement('p')
  paragraph.textContent = `${event.target.category.value}`
  // const newListItem = document.createElement('li')
  // newListItem.textContent = `${event.target.title.value}`
  

  locate.appendChild(newListItem)
  newListItem.appendChild(header)
  newListItem.appendChild(header2)
  newListItem.appendChild(paragraph)
  const form = document.querySelector('#new-item-form')
  form.reset()
}


