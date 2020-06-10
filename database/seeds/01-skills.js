exports.seed = function (knex) {
  return knex("skills")
    .del()
    .then(function () {
      return knex("skills").insert([
        {
          id: 1,
          name: "NodeJS",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395323/SkillsPng/Node_pexk3x.png",
        },
        {
          id: 2,
          name: "JavaScript",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587394108/JS_yyhsbn.jpg",
        },
        {
          id: 3,
          name: "Python",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395324/SkillsPng/Python_tcvfk2.png",
        },
        {
          id: 4,
          name: "HTML",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/c_thumb,w_200,g_face/v1587394108/HTML_kbpxaq.jpg",
        },
        {
          id: 5,
          name: "CSS",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395323/SkillsPng/CSS_s6zwpg.png",
        },
        {
          id: 6,
          name: "React",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395324/SkillsPng/React_pxd2wf.png",
        },
        {
          id: 7,
          name: "React + Hooks & Context ",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587408364/SkillsPng/reactContextHooks_kty7cm.jpg",
        },
        {
          id: 8,
          name: "Redux",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395324/SkillsPng/Redux_crk40n.png",
        },
        {
          id: 9,
          name: "PostgreSQL",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395323/SkillsPng/Postgres_uwo1tz.png",
        },
        {
          id: 10,
          name: "Bootstrap",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395323/SkillsPng/Bootstrap_bkfnwg.png",
        },
        {
          id: 11,
          name: "Material-UI",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395323/SkillsPng/MaterialUI_ytuktc.png",
        },
        {
          id: 12,
          name: "Styled-Components",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395243/StyledComponents_wstrak.png",
        },
        {
          id: 13,
          name: "Adobe XD",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395242/AdobeXD_qbhqia.png",
        },
        {
          id: 14,
          name: "Sass",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395243/Sass_tmvmcq.png",
        },
        {
          id: 15,
          name: "Less",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395243/LESS_bfch8o.png",
        },
        {
          id: 16,
          name: "Git",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587395242/Git_nglvx9.png",
        },
        {
          id: 17,
          name: "GitHub",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/c_thumb,w_200,g_face/v1587394108/github-logo_uwq6jk.jpg",
        },
        {
          id: 18,
          name: "Heroku",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587394107/heroku-logo_nozyq1.jpg",
        },
        {
          id: 19,
          name: "Netlify",
          imgUrl:
            "https://res.cloudinary.com/wjonke/image/upload/v1587394108/Netlify_gsqwvv.jpg",
        },
      ]);
    });
};
