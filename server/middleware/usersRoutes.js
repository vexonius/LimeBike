module.exports = (app, passport) => {
  const usersController = require("./../controllers/usersController");

  app.get(
    "/users/:id/info",
    passport.authenticate("jwt", { session: false }),
    usersController.getUserInfo
  );

  app.post(
    "/users/:id/info",
    passport.authenticate("jwt", { session: false }),
    usersController.updateUserInfo
  );

  app.get(
    "/users/:id/transactions",
    passport.authenticate("jwt", { session: false }),
    usersController.getAllUserTransactions
  );

  app.get(
    "/users/:id/transactions/:transactionId",
    passport.authenticate("jwt", { session: false }),
    usersController.getUserTransaction
  );

  app.post(
    "/users/:id/transactions",
    passport.authenticate("jwt", { session: false }),
    usersController.createNewTransaction
  );
};
