const { encryptPayload } = require('../middleware/payloadHandler');
const { encrypt } = require('../middleware/passwordHandler');
const Accounts = require('../models/account.model');

exports.AllAccounts = (req, res) =>{
    Accounts.getAllAccounts(req.body, (err, data) =>{
        if(err){
            if (err.kind == "failed"){
                res.status(401).send({message: err.message || 'Errors found while retrieving data'});
            } else {
             res.status(500).send({message: err.message || 'Errors found while retrieving data'});
             }
        }else{
            res.send(data);
        }
    });
}

exports.GetAccount = (req, res) =>{
    Accounts.getAccount(req.body, (err, data) =>{
        if(err){
            if (err.kind == "failed"){
                res.status(401).send({message: err.message || 'Errors found while retrieving data'});
            } else {
             res.status(500).send({message: err.message || 'Errors found while retrieving data'});
             }
        }else{
            res.send(data);
        }
    });
}

exports.CreateAccount = async (req, res) =>{
    if(!req.body){
        res.status(400).send({message: "No Data Receieved"})
    }

    console.log(req.body.acc_fname)
    const account = new Accounts({
        acc_fname: req.body.acc_fname,
        acc_mname: req.body.acc_mname,
        acc_lname: req.body.acc_lname,
    });

    Accounts.createAccount(account, (err, data) =>{
        if(err){
            if(err.kind === "failed"){
                res.status(401).send({message: 'Failed to Create Account'})
            }else{
                res.status(500).send({message: err.message || 'Failed to Create Account'})
            }
        }else{
            res.send(data);
        }
    });
}

exports.UpdateAccount = (req, res) =>{
    Accounts.updateAccount(req.body, (err, data) => {
        if(err){ 
            if(err.kind === "failed"){
                res.status(401).send({message: 'Failed to Update Account'})
            }else{
                res.status(500).send({message: err.message || 'Failed to Update Account'})
            }
        }else{
            res.send({status: "success"});
        }
    })
}

exports.DeleteAccount = (req, res) =>{
    Accounts.deleteAccount(req.body, (err, data) => {
        if(err){ 
            if(err.kind === "failed"){
                res.status(401).send({message: 'Failed to Delete Account'})
            }else{
                res.status(500).send({message: err.message || 'Failed to Delete Account'})
            }
        }else{
            res.send({status: "success"});
        }
    })
}