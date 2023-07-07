const jwt = require('jsonwebtoken')
const config = require('config')
const Token = require('../models/Token')

// const secretKey = config.get('accessSecret')
// const refreshKey = config.get('refreshSecret')

class TokenService {
  generate(payload) {
    // console.log(payload)

    const accessToken = jwt.sign(payload, config.get('accessSecret'), {
      expiresIn: '1h',
    })
    const refreshToken = jwt.sign(payload, config.get('refreshSecret'))
    return { accessToken, refreshToken, expiresIn: 3600 }
  }

  async save(user, refreshToken) {
    const data = await Token.findOne({ user })
    if (data) {
      data.refreshToken = refreshToken
      return data.save()
    }
    const token = await Token.create({ user, refreshToken })
    return token
  }
  validateRefresh(refreshToken) {
    // console.log(refreshToken)
    // console.log(config.get('refreshSecret'))
    try {
      return jwt.verify(refreshToken, config.get('refreshSecret'))
    } catch (error) {
      return null
    }
  }

  async findToken(refreshToken) {
    try {
      return await Token.findOne({ refreshToken })
    } catch (error) {
      return null
    }
  }

  validateAccess(accessToken) {
    try {
      return jwt.verify(accessToken, config.get('accessSecret'))
    } catch (error) {
      return null
    }
  }
}

module.exports = new TokenService()

// interface Tokens {
// 	userId: string
// 	accessToken: string
// 	refreshToken: string
// 	exporesIn: number
// }
