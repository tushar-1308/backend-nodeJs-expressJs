const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req, file, cb){
            cb(null,"FileUpload_multer")
        },
        filename:function(req, file, cb){
            cb(null, file.fieldname+"-"+Date.now()+".png")
        }
    })
}).single("user_file")

app.post('/upload', upload, (req,resp)=>{
    resp.send("file-uploaded")
})

app.listen(1300);