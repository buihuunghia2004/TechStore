import { validConst as vc } from "~/utils/validationConstant"

const Joi = require("joi")

const ex1 = async (req, res, next) => {
    //lấy dữ liệu từ request
    const data = {}

    //tạo đối tượng chuẩn để validation
    const correct = Joi.object({
        string: vc.STRING,
        number: vc.NUMBER,
        boolean: vc.BOOLEAN,
        email: vc.EMAIL,
        phone: vc.PHONENUMBER,
        url: vc.URL,
        objectId: vc.OBJECT_ID,
        array: vc.ARRAY(vc.STRING) //mảng chuỗi, thay đổi đối số để tạo mảng mình muốn.
    })

    try {
        //thực hiện validation
        await correct.validateAsync(data, { abortEarly: false })

        //nếu đúng cho phép qua controller
        next()
    } catch (error) {
        //nếu sai gửi lỗi qua controller
        next(error)
    }
}

export const exampleValidation = {
    ex1
}