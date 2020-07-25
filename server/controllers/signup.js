const { pool } = require('../config')


exports.get_users = async (req, res) => {
  try {
      // const allLists = await pool.query("SELECT * FROM lists ORDER BY list_id desc")
      res.json({ name: 'This is signup page...' })
      //res.json(allLists.rows)
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
      // const { list_name }  = req.body
      // const newList = await pool.query("INSERT INTO lists (list_name) VALUES ($1) RETURNING *", [list_name])
      // const allLists = await pool.query("SELECT * FROM lists ORDER BY list_id desc")
      // res.render('lists', {data: {lists: allLists.rows}})
      // console.log(req.body)
      console.log({ firstName, lastName, username, password, email })
      res.json({ firstName, lastName, username, email, password })
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