users=[{email:'houssem@gmail.com'},{password:'123'}]


const register=async(req,res)=>{
    users.push(req.body)
    res.send("user added !")
}

const login=async(req,res)=>{
    const  arr = users.find(e=>(e.email==req.body.Username) && (e.Password==req.body.Password))
    arr?  res.send("user already exists !"): res.send("user does not exist !")}

    module.exports=({register,login,users})