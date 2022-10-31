import pool from "../DB/userConnect.js";

export default function controllers(){
  const getAllUsers = async (req, res) => {
    try {
      const { rows } = await pool.query('select * from users');
      return res.json(rows)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  
  const getaHero = async (req, res) => {
    try {
      const { id } = req.params;
      const { rows } = await pool.query('select * from users where id=$1', [id]);
      if (!rows.length) return res.status(404).json({ error: 'query not found!' });
      return res.json(rows)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  
  const CreateUser = async (req, res) => {
    try {
      const { first_name, last_name, age } = req.body;
      const { rows } = await pool.query(`insert into users (first_name, last_name, age)  values ($1, $2, $3);`, [first_name, last_name, age]);
      return res.json(req.body)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  
  const updateHero = async (req, res) => {
    try {
      const { first_name, last_name, age } = req.body
      const { id } = req.params
      const { rows } = pool.query('update users set first_name=$2, last_name=$3, age=$4 WHERE id=$1', [id, first_name, last_name, age]);
      return res.json(req.body)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  
  const retireaUser = async (req, res) => {
    try {
      const { id } = req.params
      pool.query('delete from users where id=$1', [id]);
      return res.json(req.params)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
  return {getAllUsers, getaHero, CreateUser, updateHero, retireaUser}
}




// export { getAllUsers, getaHero, CreateUser, updateHero, retireaUser }