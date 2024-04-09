const axios=require("axios");

exports.homeRoutes=(req,res)=>{
axios.get("https://judiciary-information-system-qfdw.onrender.com/users")
res.render('pages/index');
}

exports.viewCase=(req,res)=>{
axios.get('https://judiciary-information-system-qfdw.onrender.com/users')
        .then(function(response){
            res.render('pages/viewCase', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

}
exports.addCase=(req,res)=>{
res.render('pages/addCase');
}

exports.update_user = (req, res) =>{
    axios.get('https://judiciary-information-system-qfdw.onrender.com/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("pages/update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.contactUs=(req,res)=>{
res.render('pages/contactUs');
}

exports.login=(req,res)=>{
res.render('pages/login');
}
exports.register=(req,res)=>{
res.render('pages/register');
}
//added
exports.viewJudges=(req,res)=>{
    axios.get('https://judiciary-information-system-qfdw.onrender.com/judges')
        .then(function(response){
            res.render('pages/viewJudges', { judges : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}


exports.viewSession=(req,res)=>{
    axios.get('https://judiciary-information-system-qfdw.onrender.com/hearings')
        .then(function(response){
            res.render('pages/viewSession', { hearings : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.viewSummary=(req,res)=>{
    axios.get('https://judiciary-information-system-qfdw.onrender.com/summarys')
        .then(function(response){
            res.render('pages/viewSummary', { summarys : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.success=(req,res)=>{
res.render('pages/success');
}
exports.failure=(req,res)=>{
res.render('pages/failure');
}
exports.aboutUs=(req,res)=>{
    res.render('pages/aboutUs');
}