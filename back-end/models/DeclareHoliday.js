const mongoose=require('mongoose');
const config=require('../config/database')

const DeclareHolidayShema= mongoose.Schema({
    HolidayDate:{
        type:String,
        required:true
    },
    Reason:{
        type:String,
        required:true
    }
})

const homeWorkSchema=module.exports = mongoose.model('HolidaydeclareComponent',DeclareHolidayShema);

module.exports.recordApplication= function(application,callback){
    application.save(callback);
}
