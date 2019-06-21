import { async } from "q";

module.export = {
    register: async (req, res) =>{
        const db = req.app.get('db')
        const {username, password} = req.body 

        const response = await db.create_user({username, password})
        res.status(200).send(response)
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
  
        const response = await db.find_user({username, password})
        res.status(200).send(response);
     },
}
