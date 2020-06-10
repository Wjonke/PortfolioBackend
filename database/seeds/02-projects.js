exports.seed = function (knex) {
  return knex("projects")
    .del()
    .then(function () {
      return knex("projects").insert([
        {
          id: 1,
          name: "Merch Dropper",
          deployed_url: "http://merchdropper.netlify.app",
          code_url: "https://github.com/Wjonke/Merch-Dropper-be",
          img_url:
            "https://image.thum.io/get/https://merchdropper.netlify.app/",
          description:
            "Merch Dropper is a quick and easy platform to upload designs and create products to create a drop-shipping online shop.",
          techStack: "Axios, Express, Knex, JWT, Stripe, PostgreSQL",
          role:
            "My focus was on developing the backend as well as incorporating third party APIs, and handling the distribution of data to ensure the backend and frontend API calls were in sync.",
        },
        {
          id: 2,
          name: "Poke Adventure",
          deployed_url: "http://pokeadventure.jcink.net/",
          code_url: "Private Code Base",
          img_url: "https://image.thum.io/get/http://pokeadventure.jcink.net/",
          description:
            "PokeAdventure is a forum-based, Pokemon role-play site. Members can come together and share their favorite adventures.",
          techStack: "Jcink-platform, HTML, CSS, JavaScript",
          role:
            "I was responsible, along with my teammate, for the Design and Development of this site per our clients specifications",
        },
        {
          id: 3,
          name: "Fotograph-Template",
          deployed_url: "https://fotographmarketing-template.netlify.app",
          code_url: "https://github.com/Wjonke/art-portfolio-UI-Wes-Jonke",
          img_url:
            "https://image.thum.io/get/https://fotographmarketing-template.netlify.app",
          description:
            "This version of my marketing page for our artist portfolio site was implemented using a HTML5UP Template.",
          techStack: "HTML5up, HTML, CSS, JavaScript",
          role:
            "Design and develop a marketing site for our photographers social media and portfolio site",
        },
        {
          id: 4,
          name: "Fotograph-NoTemplate",
          deployed_url: "https://fotograph-marketingpage.netlify.app",
          code_url: "https://github.com/Wjonke/art-portfolio-UI-Wes",
          img_url:
            "https://image.thum.io/get/https://fotograph-marketingpage.netlify.app/",
          description:
            "This version of my marketing page for our artist portfolio site was implemented using vanilla HTML, CSS and JavaScript.",
          techStack: "HTML, CSS, JavaScript",
          role:
            "Design and develop a marketing site for our photographers social media and portfolio site",
        },
        {
          id: 5,
          name: "GitHub Finder with Hooks",
          deployed_url: "https://github-finder-with-hooks.netlify.app",
          code_url: "https://github.com/Wjonke/github-finder-with-hooks",
          img_url:
            "https://image.thum.io/get/https://github-finder-with-hooks.netlify.app",
          description:
            "This app is used to find GitHub members with a simple search and then displays some metadata about the user selected",
          techStack:
            "CSS, JavaScript, React-hooks-context, React-Router, Axios, GitHub API",
          role:
            "Develop a site to search through the GitHub API and parse user data to find users and display key parts of their profile.",
        },
        {
          id: 6,
          name: "GitHub Finder + class components",
          deployed_url: "https://github-finder-class-components.netlify.app/",
          code_url: "https://github.com/Wjonke/github-finder-class-components",
          img_url:
            "https://image.thum.io/get/https://github-finder-class-components.netlify.app/",
          description:
            "This app is used to find GitHub members with a simple search and then displays some metadata about the user selected",
          techStack:
            "CSS, JavaScript, React-class components, React-Router, Axios, GitHub API",
          role:
            "Develop a site to search through the GitHub API and parse user data to find users and display key parts of their profile.",
        },
      ]);
    });
};
