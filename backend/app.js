const express=require('express');
const mongoose=require('mongoose')

const studentRoutes=require('./routes/student')

const app=express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 
mongoose.connect('mongodb+srv://assaf:M21T2501@digitalschool.zu3arj5.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true } )
  
.then(() => {console.log('Connexion à MongoDB réussie !')
    app.listen((8000||process.env.PORT),()=>{
        console.log('App listening on port 8000')
    })})
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/api/students/',studentRoutes);
app.get('/api/students/',(req,res)=>{res.end('serveur SEED digital school')});
app.delete('/api/students/',studentRoutes);

module.exports=app