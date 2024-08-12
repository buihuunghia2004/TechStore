export const _idToId = [
  {
    $addFields: {
      id: "$_id"  // Add a new field "id" with the value of "_id"
    }
  },
  {
    $unset: "_id"  // Remove the original "_id" field
  }
]