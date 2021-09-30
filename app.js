const projects = document.querySelector('.projects')
const Master = document.querySelector('.Master')
const containerImage = document.querySelector('.container-image')
const technologys = document.querySelector('.Technologys')

Master.addEventListener('click', event => {
  event.preventDefault()
  technologys.classList.add('show')
  containerImage.classList.remove('show')
  Master.classList.add('active')
  projects.classList.remove('active')
})

projects.addEventListener('click', event => {
  event.preventDefault()
  technologys.classList.remove('show')
  containerImage.classList.add('show')
  Master.classList.remove('active')
  projects.classList.add('active')
})
