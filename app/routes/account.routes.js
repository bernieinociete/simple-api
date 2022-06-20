let express = require('express');
let router = express.Router();

    const account = require('../controller/account.controller.js');
    
    
    router.post('/getAllAccounts', account.AllAccounts);
    router.post('/getAccount', account.GetAccount);
    router.post('/createAccount', account.CreateAccount);
    router.post('/updateAccount', account.UpdateAccount);
    router.post('/deleteAccount', account.DeleteAccount);

module.exports = router;
