import { ManagerRole } from "~/models/managerRoleModel";
import RoleDTO from "./RoleDTO";
import { Role } from "~/models/roleModel";

class ManagerDTO {
  constructor(data) {
    this.id = data._id;
    this.email = data.email;
    this.username = data.username;
    this.password = data.password;
    this.roles = RoleDTO.fromEntities(data.roles);
    this.createdBy = data.createdBy;
    this.updatedBy = data.updatedBy;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.destroy = data.destroy;
  }

  static fromEntity(data) {
    const { _id: id, ...rest } = data;
    return { id, ...rest };
  }
  static fromEnties(data) {
    const result = data.map((item) => {
      return new ManagerDTO(item);
    });
    return result;
  }
}

export default ManagerDTO;
