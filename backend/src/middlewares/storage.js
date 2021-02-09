const multer = require("multer");
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './storage/imgs' )
    },
    filename:function(req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
})

const upload = multer({storage})

module.exports = upload