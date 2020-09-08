const { pool } = require('../config')

exports.login = async (req, res) => {
  try {
      // const allUsers = await pool.query("SELECT * FROM users ORDER BY user_id desc")
      // res.status(200).json(allUsers.rows)
  } catch (err) {
      console.log(err.message)
 }
}