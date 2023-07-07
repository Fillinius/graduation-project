const express = require('express')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const { generateUserData } = require('../utils/helpers')
const router = express.Router({ mergeParams: true })
const tokenService = require('../servises/token.service')
const User = require('../models/User')

// Алгоритм работы
// 1 get data from req(email,password ...)
// 2 check if users already exist
// 3 hash password
// 4 create user
// 5 generete token

router.post('/signUp', [
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Минимальная длина пароля 8 символов').isLength({ min: 8 }),

  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
          },
        })
      }

      const { email, password } = req.body

      const existingUser = await User.findOne({ email })

      if (existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIL EXISTS',
            code: 400,
          },
        })
      }

      const hasedPassword = await bcrypt.hash(password, 12)

      const newUser = await User.create({
        // ...generateUserData(),
        ...req.body,
        password: hasedPassword,
      })
      // console.log(newUser, 'user')
      const tokens = tokenService.generate({ _id: newUser._id })
      await tokenService.save(newUser._id, tokens.refreshToken)

      res.status(201).send({ ...tokens, userId: newUser._id })
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже',
      })
    }
  },
])
// 1 valiator
// 2 find user
// 3 compare hased password
// 4 generate tiken
// 5 return data

router.post('/signInWithPassword', [
  check('email', 'Email не корректный').normalizeEmail().isEmail(),
  check('password', 'Пароль не может быть пустым').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
          },
        })
      }
      const { email, password } = req.body
      const existingUser = await User.findOne({ email })
      if (!existingUser) {
        return res.status(400).json({
          error: {
            message: 'EMAIL IS NOT FOUND',
            code: 400,
          },
        })
      }

      const isPasswordEqual = await bcrypt.compare(
        password,
        existingUser.password
      )
      if (!isPasswordEqual) {
        return res.status(400).json({
          error: {
            message: 'INVALID PASSWORD',
            code: 400,
          },
        })
      }
      const tokens = tokenService.generate({ _id: existingUser._id })
      await tokenService.save(existingUser._id, tokens.refreshToken)

      res.status(200).send({ ...tokens, userId: existingUser._id })
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка. Попробуйте позже',
      })
    }
  },
])
router.post('/token', async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body
    const dataTokehRefresh = tokenService.validateRefresh(refreshToken)
    const dbToken = await tokenService.findToken(refreshToken)
    console.log(dataTokehRefresh)
    console.log(dbToken)
    if (
      !dataTokehRefresh ||
      !dbToken ||
      dataTokehRefresh._id !== dbToken?.user.toString()
    ) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const tokens = await tokenService.generate({ _id: dataTokehRefresh._id })
    await tokenService.save(dataTokehRefresh._id, tokens.refreshToken)
    // res.status(200).send({ tokens })
    res.status(200).send({ ...tokens, userId: data._id })
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    })
  }
})

module.exports = router
