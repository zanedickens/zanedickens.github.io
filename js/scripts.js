// Instead of hard-coding the project details, you can store them in an array of objects and dynamically generate the project cards using Javascript.

const projects = [
    {
      name: 'Random Prompter',
      description: 'A quick proof of concept: random prompter for writers. Most fun on mobile because shaking your phone shows a new prompt. or ideal use on mobile devices.',
      image: 'https://via.placeholder.com/300x200',
      url: 'projects/randomprompter.html',
    },
    // Add more projects as needed
  ]
  
  const projectCardsContainer = document.querySelector('#project-cards')
  
  projects.forEach(project => {
    const projectCard = `
      <div class="w-full md:w-1/2 lg:w-1/3 p-4">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
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

// Add a sun and moon element that move around the screen and change color based on the time of day

const sunElement = document.createElement('div');
sunElement.classList.add('sun');
document.body.appendChild(sunElement);

const moonElement = document.createElement('div');
moonElement.classList.add('moon');
document.body.appendChild(moonElement);

function updateSunAndMoon() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  

  // Calculate the angle for the sun and moon based on the current time
  const angle = (hour * 60 + minute) / (24 * 60) * 360;

  // Update the position and color of the sun and moon elements
  sunElement.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  moonElement.style.transform = `translate(-50%, -50%) rotate(${angle + 180}deg)`;
  
  if (hour >= 5 && hour < 8) {
    sunElement.style.backgroundColor = '#F9D5E5';
    moonElement.style.backgroundColor = '#F9D5E5';
  } else if (hour >= 8 && hour < 12) {
    sunElement.style.backgroundColor = '#D3CCE3';
    moonElement.style.backgroundColor = '#D3CCE3';
  } else if (hour >= 12 && hour < 16) {
    sunElement.style.backgroundColor = '#C2E9FB';
    moonElement.style.backgroundColor = '#C2E9FB';
  } else if (hour >= 16 && hour < 19) {
    sunElement.style.backgroundColor = '#FDE2CE';
    moonElement.style.backgroundColor = '#FDE2CE';
  } else if (hour >= 19 && hour < 22) {
    sunElement.style.backgroundColor = '#1F1C2C';
    moonElement.style.backgroundColor = '#1F1C2C';
  } else {
    sunElement.style.backgroundColor = '#262626';
    moonElement.style.backgroundColor = '#262626';
  }
  console.log("moonie!")
}

updateSunAndMoon(); // initial call

// update every minute
setInterval(updateSunAndMoon, 60 * 1000); 

// Will change the background gradient every hour of a 24-hour day:

function setBackground() {
    var now = new Date();
    var hour = now.getHours();
    var color1, color2;
  
    if (hour >= 5 && hour < 8) {
      color1 = "#F9D5E5";
      color2 = "#EEB8D1";
    } else if (hour >= 8 && hour < 12) {
      color1 = "#D3CCE3";
      color2 = "#E9E4F0";
    } else if (hour >= 12 && hour < 16) {
      color1 = "#C2E9FB";
      color2 = "#8ED2F7";
    } else if (hour >= 16 && hour < 19) {
      color1 = "#FDE2CE";
      color2 = "#FAAF9F";
    } else if (hour >= 19 && hour < 22) {
      color1 = "#1F1C2C";
      color2 = "#928DAB";
    } else {
      color1 = "#262626";
      color2 = "#4d4d4d";
    }
  
    document.body.style.background = "linear-gradient(to bottom, " + color1 + ", " + color2 + ")";
  }
  
  setBackground(); // initial call
  
  // update every hour
  setInterval(setBackground, 60 * 60 * 1000); 
  
  /* This code uses the following colors for different hours:

5:00 AM - 8:00 AM: light pink and pink
8:00 AM - 12:00 PM: light purple and light blue
12:00 PM - 4:00 PM: light blue and dark blue
4:00 PM - 7:00 PM: light orange and dark orange
7:00 PM - 10:00 PM: dark blue and light purple
10:00 PM - 5:00 AM: dark grey and light grey

*/

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Format the time as HH:MM:SS with leading zeros
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    // Update the text content of the element with ID "current-time"
    document.getElementById('current-time').textContent = timeString;
  }
  
  // Call updateTime every second to update the displayed time
  setInterval(updateTime, 1000);