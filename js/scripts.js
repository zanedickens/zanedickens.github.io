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

// Will change the background gradient every hour of a 24-hour day:

function setBackground() {
    var now = new Date();
    var hour = now.getHours();
    var color1, color2;
  
    if (hour >= 0 && hour < 6) {
      color1 = "#020111";
      color2 = "#3a6186";
    } else if (hour >= 6 && hour < 9) {
      color1 = "#f7971e";
      color2 = "#ffd200";
    } else if (hour >= 9 && hour < 12) {
      color1 = "#ddd6f3";
      color2 = "#faaca8";
    } else if (hour >= 12 && hour < 15) {
      color1 = "#bdc3c7";
      color2 = "#2c3e50";
    } else if (hour >= 15 && hour < 18) {
      color1 = "#cb2d3e";
      color2 = "#ef473a";
    } else if (hour >= 18 && hour < 21) {
      color1 = "#00c6ff";
      color2 = "#0072ff";
    } else {
      color1 = "#0f0c29";
      color2 = "#302b63";
    }
  
    document.body.style.background = "linear-gradient(to bottom, " + color1 + ", " + color2 + ")";
  }
  
  setBackground(); // initial call
  
  // update every hour
  setInterval(setBackground, 60 * 60 * 1000); 
  