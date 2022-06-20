const sql = require('./db.model');
const {encrypt, pw_check} = require('../middleware/passwordHandler')


const Accounts = function(accounts){
    this.acc_fname = accounts.acc_fname;
    this.acc_mname = accounts.acc_mname;
    this.acc_lname = accounts.acc_lname;
}

Accounts.getAllAccounts = (data, result) => {
    try {
        let selectQuery = 'SELECT * FROM ?? WHERE isDeleted = 0'
        let query = sql.format(selectQuery,['accounts_tbl']);
        
        sql.query(query, async (err, res)=>{
            if(err){
                result(err, null);
                return;
            }

            if(res.length) {
                result(null, {data: res, status: "success", message: "Successfully Retrived Accounts"});
                return;
            }else{
                result(null, {data: res, status: "success", message: "No Record"});
            }
        });
            
    } catch (error) {
        result(error, null);
        return;
    }
}

Accounts.getAccount = (data, result) => {
    try {
        let selectQuery = 'SELECT * FROM ?? WHERE acc_id = ? AND isDeleted = 0'
        let query = sql.format(selectQuery,['accounts_tbl', data.acc_id]);
        
        sql.query(query, async (err, res)=>{
            if(err){
                result(err, null);
                return;
            }

            if(res.length) {
                result(null, {data: res, status: "success", message: "Successfully Retrived Account"});
                return;
            }else{
                result(null, {data: res, status: "success", message: "No Record"});
            }
        });
            
    } catch (error) {
        result(error, null);
        return;
    }
}

Accounts.createAccount = (newUser, result) => {
    try {
        let insertQuery = 'INSERT INTO ?? SET ?';
    
        query = sql.format(insertQuery, ['accounts_tbl', newUser]);
        sql.query(query, (err, res)=>{
            if(err){
                result(err, null);
                return;
            }
                result(null, {acc_id: res.insertId, newUser,   
                    status: "success",
                    message: "User Registered Successfully"});
                return
            });
    } catch (error) {
        result(error, null)
        return
    }
}

Accounts.updateAccount = (data, result) => {
    try {
        let selectQuery = 'UPDATE accounts_tbl SET acc_fname = ?, acc_mname = ?, acc_lname = ? WHERE acc_id = ?';
        let query = sql.format(selectQuery,[`${data.acc_fname}`, `${data.acc_mname}`, `${data.acc_lname}`, `${data.acc_id}`])

        sql.query(query, async (err, res)=>{
            if(err){
                result(err, null);
                return;
            }
            result(null, {status: "success", message: "Account Updated"});
            return;
        })
    } catch (error) {
        result(error, null)
        return
    }
}

Accounts.deleteAccount = (data, result) => {
    try {
        let selectQuery = 'UPDATE accounts_tbl SET isDeleted = 1 WHERE acc_id = ?';
        let query = sql.format(selectQuery,[`${data.acc_id}`])

        sql.query(query, async (err, res)=>{
            if(err){
                result(err, null);
                return;
            }

            result(null, {status: "success", message: "Account Archived"});
            return;
        })
    } catch (error) {
        result(error, null)
        return
    }
}

module.exports = Accounts;