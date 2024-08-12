import { successRes } from "~/utils/SuccessRes"
import { exampleService } from "./exampleService"

const method = async (req, res, next) => {
    //lấy dữ liệu từ request
    const data = {}
    try {
        const result = await exampleService.method(data)
        successRes(res, data, 'Success')
    } catch (error) {
        next(error)
    }
}

export const exampleController = {
    method
}