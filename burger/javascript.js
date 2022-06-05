const toggleBtn = document.querySelector(".toggle-btn");
const linkContainer = document.querySelector(".links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  linkContainer.classList.toggle("show");
});


const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

const projectContainer = document.querySelector('.project-container');

projects.forEach(project => {
    projectContainer.innerHTML += `
    <div class="project-card" data-tags="#all, ${project.tags}">
        <img src="img/${project.image}" alt="">
        <div class="content">
            <h1 class="project-name">${project.name}</h1>
            <span class="tags">${project.tags}</span>
        </div>
    </div>
    `;
})

// filters

const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            } else{
                card.classList.add('hide');
            }
        })

        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})

let ratingStarInput = [...document.querySelectorAll(".star")];

ratingStarInput.map((star, index) => {
  star.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        ratingStarInput[i].src = `img/fill star.png`;
      } else {
        ratingStarInput[i].src = `img/no fill star.png`;
      }
    }
  });
});
