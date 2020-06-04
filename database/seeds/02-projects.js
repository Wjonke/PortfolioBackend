exports.seed = function (knex) {
  return knex("projects")
    .del()
    .then(function () {
      return knex("projects").insert([
        {
          id: 1,
          name: "Merch Dropper",
          deployed_url: "merchdropper.netlify.app",
          code_url: {
            backend: "https://github.com/Wjonke/Merch-Dropper-be",
            frontend: "https://github.com/Wjonke/Merch-Dropper-fe",
          },
          img_url:
            "https://image.thum.io/get/https://merchdropper.netlify.app/",
          description:
            "Merch Dropper is a quick and easy platform to upload designs and create products that plug into scalablepress.com to create a drop-shipping online shop. No inventory required!",
          techStack: "Axios, Node.js, Express, Knex, JWT, Stripe, PostgreSQL",
          role:
            "Backend Dev, Frontend Design Consultant - My focus was on developing the backend as well as incorporating Scalable Press and Stripe API's, and handling the distribution of data to ensure the backend and frontend API calls were in sync. I was involved in the creation of the front end from a design and structural standpoint. This project was a fun experience learning how to handle what was essentially 'Data hot-potato'.",
        },
        {
          id: 2,
          name: "Fotograph-Vanilla",
          deployed_url: "https://fotograph-marketingpage.netlify.app",
          code_url: "https://github.com/Wjonke/art-portfolio-UI-Wes",
          img_url:
            "https://image.thum.io/get/https://fotograph-marketingpage.netlify.app/",
          description:
            "We solve the problem of not having professional portfolio display platform, you will be proud to display your work on our website, whether it’s in a client’s board room or showing off to colleges. Be proud of your work and trust us to deliver it with impact.",
          techStack: "HTML, CSS, Javascript",
          role:
            "Design and develop a static marketing site for our Photographers Social Portfolio Site",
        },
        {
          id: 3,
          name: "Fotograph-HTML-Template",
          deployed_url: "https://fotographmarketing-template.netlify.app",
          code_url: "https://github.com/Wjonke/art-portfolio-UI-Wes-Jonke",
          img_url:
            "https://image.thum.io/get/https://fotographmarketing-template.netlify.app",
          description:
            "We solve the problem of not having professional portfolio display platform, you will be proud to display your work on our website, whether it’s in a client’s board room or showing off to colleges. Be proud of your work and trust us to deliver it with impact.",
          techStack: "HTML5up-template, HTML, CSS, Javascript",
          role:
            "Design and develop a static marketing site for our Photographers Social Portfolio Site",
        },
        {
          id: 4,
          name: "PokeAdventure",
          deployed_url: "http://pokeadventure.jcink.net/",
          code_url: "Private Code Base",
          img_url: "https://image.thum.io/get/http://pokeadventure.jcink.net/",
          description:
            "PokeAdventure is a forum-based, Pokemon role-play site. Members can come together and share their favorite or some brand new adventures, based solely on their imagination and limited only by their creativity.",
          techStack: "Jcink-platform, HTML, CSS, Javascript",
          role:
            "I was responsible, along with my teammate, for the Design and Development of this site",
        },
        {
          id: 5,
          name: "Github Finder with Hooks",
          deployed_url: "https://github-finder-with-hooks.netlify.app",
          code_url: "https://github.com/Wjonke/github-finder-with-hooks",
          img_url:
            "https://image.thum.io/get/https://github-finder-with-hooks.netlify.app",
          description:
            "This 'WIP' app is used to find github members with a simple search and then displays some metadata about the user selected",
          techStack:
            "CSS, Javascript, React with hooks and context API for state management, React-Router, Axios",
          role:
            "Develop a site to search through the Github API and parse user data to find users and display key parts of their profile",
        },
        {
          id: 6,
          name: "Github Finder class components",
          deployed_url: "https://github-finder-class-components.netlify.app/",
          code_url: "https://github.com/Wjonke/github-finder-class-components",
          img_url:
            "https://image.thum.io/get/https://github-finder-class-components.netlify.app/",
          description:
            "This 'WIP' app is used to find github members with a simple search and then displays some metadata about the user selected",
          techStack:
            "CSS, Javascript, React in class components, React-Router, Axios",
          role:
            "Develop a site to search through the Github API and parse user data to find users and display key parts of their profile",
        },
      ]);
    });
};
