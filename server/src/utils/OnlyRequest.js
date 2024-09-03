import Pick from "./Pick"

const OnlyRequest = (onlies,dtoSchema) => {  
  let result = {}
  onlies && onlies.split(',').forEach(item => {
    result[item] = 1
  })
  result = Pick(result,dtoSchema)
  if ( JSON.stringify(result) === '{}') {
    return undefined
  }
  return result
}

export default OnlyRequest