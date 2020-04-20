exports.seed = function (knex) {
  return knex("projects")
    .del()
    .then(function () {
      return knex("projects").insert([
        {
          id: 1,
          name: "rowValue1",
          deployed_url: "rowValue1",
          code_url: "rowValue1",
          img_url: "rowValue1",
          description: "rowValue1",
          techStack: "rowValue1",
          role: "rowValue1",
        },
        {
          id: 2,
          name: "rowValue1",
          deployed_url: "rowValue1",
          code_url: "rowValue1",
          img_url: "rowValue1",
          description: "rowValue1",
          techStack: "rowValue1",
          role: "rowValue1",
        },
        {
          id: 3,
          name: "rowValue1",
          deployed_url: "rowValue1",
          code_url: "rowValue1",
          img_url: "rowValue1",
          description: "rowValue1",
          techStack: "rowValue1",
          role: "rowValue1",
        },
        {
          id: 4,
          name: "rowValue1",
          deployed_url: "rowValue1",
          code_url: "rowValue1",
          img_url: "rowValue1",
          description: "rowValue1",
          techStack: "rowValue1",
          role: "rowValue1",
        },
        {
          id: 5,
          name: "rowValue1",
          deployed_url: "rowValue1",
          code_url: "rowValue1",
          img_url: "rowValue1",
          description: "rowValue1",
          techStack: "rowValue1",
          role: "rowValue1",
        },
        {
          id: 6,
          name: "rowValue1",
          deployed_url: "rowValue1",
          code_url: "rowValue1",
          img_url: "rowValue1",
          description: "rowValue1",
          techStack: "rowValue1",
          role: "rowValue1",
        },
      ]);
    });
};
