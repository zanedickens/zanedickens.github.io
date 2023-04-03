// Instead of hard-coding the project details, you can store them in an array of objects and dynamically generate the project cards using Javascript.

const projects = [
    {
      name: 'Random Prompter',
      description: 'A quick proof of concept, random prompt mamker for ideal use on mobile devices. Shake to change prompt. Created with ChatGPT via https://picoapps.xyz/, code downloaded and modified locally.',
      image: 'https://via.placeholder.com/300x200',
      url: 'projects/randomprompter.html',
    },
    {
      name: 'Project Name 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300x200',
      url: '#',
    },
    // Add more projects as needed
  ]
  
  const projectCardsContainer = document.querySelector('#project-cards')
  
  projects.forEach(project => {
    const projectCard = `
      <div class="w-full md:w-1/2 lg:w-1/3 p-4">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img class="w-full h-48 object-cover" src="${project.image}" alt="Project Image">
          <div class="p-4">
            <h3 class="font-bold text-purple-500 text-xl mb-2">${project.name}</h3>
            <p class="text-gray-700 text-base">${project.description}</p>
            <a href="${project.url}" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">View Project</a>
          </div>
        </div>
      </div>
    `
    projectCardsContainer.innerHTML += projectCard
  })

  // You can add more interactivity to the landing page by adding a smooth scrolling effect to the navigation links.

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()
    const targetId = link.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)
    targetElement.scrollIntoView({ behavior: 'smooth' })
  })
})

  