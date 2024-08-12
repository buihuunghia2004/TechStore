const { Manager } = require("~/models/managerModel");
const { ManagerRole } = require("~/models/managerRoleModel");
const { Role } = require("~/models/roleModel");

exports = {
  async up(db, client) {
    const role1 = new Role({ name: "admin" });
    const role2 = new Role({ name: "accounting" });
    const role3 = new Role({ name: "support" });
    const role4 = new Role({ name: "productmanager" });

    const initialInfoManager = {
      password: "123456",
      createdBy: "System",
      updatedBy: "System",
      destroy: false,
    }
    const managerAdmin = new Manager({
      ...initialInfoManager,
      email: "admin@techstore.com",
      username: "admin",
    });
    const managerAccounting = new Manager({
      ...initialInfoManager,
      email: "accounting@techstore.com",
      username: "accounting",
    });
    const managerSupport = new Manager({
      ...initialInfoManager,
      email: "support@techstore.com",
      username: "support",
    });

    await db.collection("roles").insertMany([role1, role2, role3, role4]);
    await db.collection("managers").insertMany([managerAdmin, managerAccounting, managerSupport]);
  },

  async down(db, client) {
    const roleNames = ["admin", "accounting", "support", "productmanager"];
    await db.collection("roles").deleteMany({
      name: { $in: roleNames },
    });
  },
};
