const ATM = {
    is_auth: false, 
    current_user:false,
    current_type:false,
     
    // all cash of ATM
    cash: 2000,
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // authorization
    auth: function(number, pin) {
 
    },
    // check current debet
    check: function() {
 
    },
    // get cash - available for user only
    getCash: function(amount) {
 
    },
    // load cash - available for user only
    loadCash: function(amount){
 
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
 
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {
 
    },
    // log out
    logout: function() {
 
    }
};
