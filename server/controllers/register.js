const { pool } = require('../config')


exports.get_users = async (req, res) => {
  try {
      const allUsers = await pool.query("SELECT * FROM users ORDER BY user_id desc")
      res.status(200).json(allUsers.rows)
  } catch (err) {
      console.log(err.message)
 }
}

exports.add_user = async (req, res) => {
  try {
      let { firstName, lastName, username, email, password } = req.body
      firstName = sanitizerName(firstName)
      lastName = sanitizerName(lastName)
      username = sanitizerUsername(username)
      email = sanitizerEmail(email)
      password = sanitizerPassword(password)
      const is_subscribed = 1
      await pool.query(
        "INSERT INTO users (first_name, last_name, username, email, password, is_subscribed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [firstName, lastName, username, email, password, is_subscribed]
      )
      res.status(200).json({ firstName, lastName, username, email, password })
  } catch (err) {
      console.log(err.message)
 }
}

const sanitizerName = (input) => {
  // input = input.replace(/(<([^>]+)>)/gi, "") // Removing html tags
  // input = input.trim()
  // input = input.toLowerCase()
  input = input.replace(/(<([^>]+)>)/gi, "").trim().toLowerCase()
  return input.charAt(0).toUpperCase() + input.slice(1)
}

const sanitizerUsername = (input) => {
  return input.replace(/(<([^>]+)>)/gi, "").trim()  
}

const sanitizerEmail = (input) => {
  return input.replace(/(<([^>]+)>)/gi, "").trim()  
}

const sanitizerPassword = (input) => {
  return input.replace(/(<([^>]+)>)/ig, "")
}