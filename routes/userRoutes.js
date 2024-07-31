import { Router } from "express";
const router = Router();
import { v4 } from "uuid";

import users, { some, filter, push, forEach } from "../../Users"; 
router.get("/", (req, res) => {  
    res.json(users);}); 

    router.get("/:id", (req, res) => {  
        const found = some(user => user.id === parseInt(req.params.id));   
        if (found) {    
            res.json(filter(user => user.id === parseInt(req.params.id)));  
        } else {    
            res.sendStatus(400);  }}); 
            
            router.post("/", (req, res) => {  
                const newUser = {    
                    id: v4(),    
                    name: req.body.name,    
                    email: req.body.email  };   
                    if (!newUser.name || !newUser.email) {   
                         return res.sendStatus(400);  }  
                         push(newUser);  
                         res.json(users);});
                         
//Update 
Userrouter.put("/:id", (req, res) => {  
    const found = some(user => user.id === parseInt(req.params.id));  
    if (found) {    
        const updateUser = req.body;    
        forEach(user => {      
            if (user.id === parseInt(req.params.id)) {        
                user.name = updateUser.name ? updateUser.name : user.name;       
                user.email = updateUser.email ? updateUser.email : user.email;        
                res.json({ msg: "User updated", user });      
            }    
        });  
    } else {    
        res.sendStatus(400);  
    }});

    
//Delete 
Userrouter.delete("/:id", (req, res) => {  
    const found = some(user => user.id === parseInt(req.params.id))  
    if (found) {    
        users = filter(user => user.id !== parseInt(req.params.id))    
        res.json({      
            msg: "User deleted", users });  
        } else {    
            res.sendStatus(400);  
        }}); 
        
        export default router;