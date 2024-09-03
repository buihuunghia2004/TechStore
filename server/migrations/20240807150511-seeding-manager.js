const bcryptjs = require("bcryptjs");
const { ObjectId } = require("mongodb");

const ROLE = {
  ADMIN: "admin",
  ACCOUNTING: "accounting",
  SUPPORT: "support",
  PRODUCTMANAGER: "productmanager",
}

module.exports = {
  async up(db, client) {

    const initialInfoManager = {
      password: "123456",
      createdBy: "System",
      updatedBy: "System",
      _destroy: false,
    };
    const managerAdmin ={
      ...initialInfoManager,
      _id:new ObjectId(),
      email: "admin@techstore.com",
      username: "admin",
      roles: [ROLE.ADMIN],
    };

    //hash password
    const managers = [managerAdmin];
    const salt = bcryptjs.genSaltSync(10);
    managers.map(
      (manager) =>
        (manager.password = bcryptjs.hashSync(manager.password, salt))
    );

    await db.collection("managers").insertMany([managerAdmin]);
  },
  async down(db, client) {
    const roleNames = ["admin", "accounting", "support", "productmanager"];
    await db.collection("roles").deleteMany({
      name: { $in: roleNames },
    });
  },
};
