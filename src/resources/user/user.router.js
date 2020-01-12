import { Router } from 'express'
import { me } from './user.controllers'

const router = Router()

router.get('/', me)
router.put('/', me)

export default router
