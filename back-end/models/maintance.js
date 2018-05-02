const mongoose=require('mongoose');
const config=require('../config/database')

const maintenanceShema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
})

const maintenanceShema=module.exports = mongoose.model('RequestForMaintenanceComponent',maintenanceShema);

module.exports.recordApplication= function(application,callback){
    //console.log("saving the application");
    application.save(callback);
    //console.log("saved the application");
}
