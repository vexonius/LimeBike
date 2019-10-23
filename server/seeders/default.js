export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("bicycle", [
      {
        name: "Cinelli Gazzeta",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bd5b958623167.5a032533b77e6.jpg",
        year: 2017,
        price: 18.0,
        category: "BASIC"
      },
      {
        name: "Cinelli Zydeco",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b0c9ee58623231.5a03259bafbe1.jpg",
        year: 2019,
        price: 18.0,
        category: "BASIC"
      },
      {
        name: "Cinelli Supertar Disc",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3821b958611479.5a02d3fbe2fc0.jpg",
        year: 2018,
        price: 24.0,
        category: "CASUAL"
      },
      {
        name: "Cinelli Superstar Caliper",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a378f58611619.5a02d55cacd55.jpg",
        year: 2018,
        price: 24.0,
        category: "CASUAL"
      },
      {
        name: "Cinelli Stratofaster",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/62c17e58453433.59fca274e9ecd.jpg",
        year: 2019,
        price: 42.0,
        category: "PRO"
      },
      {
        name: "Cinelli Nemo TIG",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3d2c7d58623449.5a0326f369175.jpg",
        year: 2018,
        price: 42.0,
        category: "PRO"
      },
      {
        name: "Cinelli Nemo TIG Disc",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2af4b658453685.59fca407c19dc.jpg",
        year: 2017,
        price: 36.0,
        category: "SPORT"
      },
      {
        name: "Cinelli Experience",
        photoUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21ba6e58453199.59fca0b95ba1d.jpg",
        year: 2018,
        price: 36.0,
        category: "SPORT"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bicycle", null, {});
  }
};
