const jwt = require('jsonwebtoken')
// getError handler
exports.sendError = (res, msg, status = 401) => {
  res.status(status).json({ success: false, error: msg })
}

// generate OTP
exports.generateOTP = () => {
  let otp = ''
  for (var i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9)
    otp = otp + randVal
  }
  return otp
}

// Generate AccessToken
exports.getAccessToken = data => {
  const token = jwt.sign({ user_id: data._id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '5s'
  })
  return token
}

exports.generateRefreshToken = data => {
  const token = jwt.sign(
    { user_id: data._id },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: '5d'
    }
  )
  return token
}

// verify access token
exports.verifyAccessToken = token => {
  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, decode) => {
    if (err) {
      return res.send({ status: false })
    }
    const result = decode
    return result
  })
}

exports.getRefreshToken = data => {}
