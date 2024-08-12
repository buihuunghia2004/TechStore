class RoleDTO {
  constructor(data) {
    this.id = data._id;
    this.name = data.name;
  }
  static fromEntity(data) {
    return new RoleDTO(data);
  }
  static fromEntities(data) {    
    return data.map((role) => new RoleDTO(role));
  }
}
export default RoleDTO;