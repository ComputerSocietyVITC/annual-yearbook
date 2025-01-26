const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const years = [2023, 2024, 2025, 2026];

  years.forEach((year) => {
    createPage({
      path: `/yearbook/${year}`,
      component: path.resolve("./src/pages/yearbook/[year].jsx"),
      context: {
        year: year,
      },
    });
  });
};
