const router=require('express').Router()
const Controller=require('./Controller.js')

const workinghours=(req,res,next)=>{
    let today=new Date()
    let day=today.getDay()
    let hour=today.getHours()
    
    if(hour>=9 && hour<=20){
        next()
    }
    else{ res.send('<h1>Working only from Monday to Friday, from 9 to 17</h1>')}
}

router.use(workinghours)
router.post('/register',Controller.register)
router.post('/login',Controller.login)
const auth=(req,res,next)=>{
    const x=users.findIndex(e=>(e.email==req.body.email) && (e.password==req.body.password))
    if(x>0){next()}
    else{res.send('You must register first !!')}

}
router.use(auth)
const path=__dirname

router.get('/',(req,res)=>res.sendFile(path+"/Home_page.html"))
router.get('/Our_services',(req,res)=>res.sendFile(path+"/Our_services.html"))
router.get('/Contact_us',(req,res)=>res.sendFile(path+"/Contact_us.html"))


module.exports=router