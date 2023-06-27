const express=require('express')
const server=express();
const cors=require('cors');
const monk=require('monk');
// main().catch(err=>console.log(err));
// async function main(){
//     await mongoose.connect('mongodb+srv://20a91a0578:mongodb1818@cluster0.matux8t.mongodb.net/Project');
//     console.log('db.conenected.');
// }


const db=monk('mongodb://0.0.0.0:27017/AbsentTrack');
db.then(()=>{
    console.log('db connected ......');
})
server.use(cors());
server.use(express.json());
server.get('/demo',(req,res)=>{
    const collection=db.get('alogin_data');
    
    collection.find({}).then((docs)=>{
       res.send(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})

server.get('/demo1',(req,res)=>{
    const collection=db.get('login_data');
    
    collection.find({}).then((docs)=>{
       res.send(docs);
    }); 
    // console.log(obj)
    // res.send(obj);


})

server.post('/signup',(req,res)=>{
    const collection=db.get('login_data');

    collection.insert({name:req.body.name,password:req.body.password,rollno:req.body.rollno,college:req.body.college,branch:req.body.branch,tech:req.body.tech}).then(()=>{
        console.log('inserted');
    })
})

server.post('/reason',(req,res)=>{
    const collection=db.get('reasons');

    collection.insert({rollno:req.body.rollno,date:req.body.date,reason:req.body.reason}).then(()=>{
        console.log('inserted');
    })
})

server.get('/reason',(req,res)=>{
    const collection=db.get('reasons');
    
    collection.find({}).then((docs)=>{
       res.send(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})

// server.get('/bdetails',(req,res)=>{
//     const collection=db.get('login_data');
    
//     collection.find({}).then((docs)=>{
//        res.send(docs);
//     }); 
//     // console.log(obj)
//     // res.send(obj);

// })
server.get('/absentlists',(req,res)=>{
    const collection=db.get('absentlist');
    
    collection.find({}).then((docs)=>{
       res.send(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})

server.get('/reports',(req,res)=>{
    const collection=db.get('reasons');
    
    collection.find({}).then((docs)=>{
       res.send(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})
server.get('/sdash',(req,res)=>{
    const collection=db.get('sdashboard');
    
    collection.find({}).then((docs)=>{
       res.send(docs);
    }); 
    // console.log(obj)
    // res.send(obj);

})

// const collection=db.get('alogin_data');
// collection.insert({id:'1111',password:'2222'}).then((docs)=>{console.log(docs)}).catch((err)=>{console.log(err)}).then(()=>db.close())

server.listen(8009,()=>{
    console.log('server running on port....') 
})