const db = require("../utils/Database");
const bcrypt = require("bcryptjs");
const users= [
    {
        id:1,
        name:"Avikesh Kumar",
        username:"123456",
        email:"admin@gmail.com",
        password:"123",
    },
    {
        id:2,
        name:"Person 2",
        username:"user",
        email:"user@gmail.com",
        password:"123"
    }
]

//  ============ToDo List =============

const todoList = [
    {title:"Go to Work", description:"i have to go for working at vs code ", is_completed:false},
    {title:"Go to College", description:"Befor go to collge assignment must be completed", is_completed:true},
    {title:"Go to zym", description:"After 5 pm i have to go to zym as well as maintain my phyisical wellbeing", is_completed:false},
    {title:"Go to Work", description:"i have to go for working at vs code ", is_completed:true},
]


async function Login(req, res) {
    const { email, password} = req?.body;

    if(!email) {
        return res.status(400).json({success:false, message:"Please Provide Username Or Email."});}
    if(!password){
         return res.status(400).json({success:false, message:"Please Enter Password."});}
 try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    if (!email?.trim() || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const [users] = await db.execute(
      "SELECT id, name, email, password FROM students WHERE email = ? LIMIT 1",
      [email.trim()]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Password should never be sent to the frontend.
    return res.json({
      message: "Login successful.",
      users: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      task:todoList,
      token:"fgkbifugiufgn5iuerniun43eds8ij"
    });
  } catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      message: "Internal server error.",
    });
  }
}

async function getLogin(req, res) {
   return res.send("Success");
}

module.exports = {
    Login,
    getLogin,
}