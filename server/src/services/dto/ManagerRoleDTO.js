import { ManagerRole } from "~/models/managerRoleModel";
import RoleDTO from "./RoleDTO";

class ManagerRoleDTO {
  constructor(data) {
    this.managerId = data.managerId
    this.roleId = data.roleId
  }

  async getRolesFromManagerId(id) {
    const roles = await ManagerRole.find({ managerId: new ObjectId(id) });
    return RoleDTO.fromEntities(roles);
  }
}

export default ManagerRoleDTO