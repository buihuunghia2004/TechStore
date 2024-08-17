
import bcryptjs from "bcryptjs";
import { Manager } from "../src/models/managerModel.js";
import { Role } from "../src/models/roleModel.js";
 export const up = async (db, client)=> {
    const role1 = new Role({name: "admin"});
    const role2 = new Role({name: "accounting"});
    const role3 = new Role({name: "support"});
    const role4 = new Role({name: "productmanager"});

    const initialInfoManager = {
      password: "123456",
      createdBy: "System",
      updatedBy: "System",
      _destroy: false,
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

    //hash password
    const managers = [managerAdmin, managerAccounting, managerSupport];
    const salt = bcryptjs.genSaltSync(10);
    managers.map((manager) =>manager.password = bcryptjs.hashSync(manager.password, salt))


    const managerRoles = [
      { managerId: managerAdmin._id, role: role1.name },
      { managerId: managerAccounting._id, role: role2.name },
      { managerId: managerAccounting._id, role: role3.name },
      { managerId: managerSupport._id, role: role2.name },
      { managerId: managerSupport._id, role: role3.name },
    ]
    
    await db.collection("roles").insertMany([role1, role2, role3, role4]);
    await db.collection("managers").insertMany([managerAdmin, managerAccounting, managerSupport]);
    await db.collection("managerroles").insertMany(managerRoles);
  }

  export const  down =  async (db, client) => {
    const roleNames = ["admin", "accounting", "support", "productmanager"];
    await db.collection("roles").deleteMany({
      name: { $in: roleNames },
    });
  }

