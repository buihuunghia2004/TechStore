import express from 'express'
import { exampleController as controll} from '~/modules/example/exampleController'
import { exampleValidation as valid} from '~/validations/exampleValidation'
const Router = express.Router()

Router.route('/')
 .post(valid.ex1, controll.method)

export const exampleRoute = Router