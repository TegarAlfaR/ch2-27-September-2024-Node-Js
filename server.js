const http = require("http");

const url = require("url");

const fs = require("fs");

const fsAsinc = require("fs").promises;

const fileUtama = fs.readFileSync("./index.txt", "utf8");



// express = framework third party untuk memudahkan http
const server = http.createServer((req, res) => {
    // get request
    console.log(req.url);
    // res.end("hello FSW 2");
    // set url
    const pathUrl = req.url;


    // LOCALHOST:3000/ = HEALTH CHECK, cek aplikasi ketika berjalan
    // 404 : handle if url not found


    if(pathUrl === "/yogi")
    {
        // cek respon
        res.end("Hello Yogi");
    }
    else if(pathUrl === "/"){
        res.end("Hello tim 10");
    }
    else if(pathUrl === "/tegar"){
        console.log(`original data from indext.txt ${contentFileUtama}`);
        async function rewriteFromTegar(filepath, content) {
            try {
                await fsAsync.writeFile(filepath, content) 
                console.log("sukses write file")
                const resultRewrite = await fsAsync.readFile(filepath, "utf8"); 
                res.end("Hello tim 10");
            } catch (error) {
                console.log(error)
            }
        }
        
        rewriteFromTegar("./index.txt", "ini coba coba");
        console.log(fileUtama);
    }
    else{
        res.end("tidak ada ! Status code : 404");
    }
})

// set local
server.listen(3000, 'localhost',() => {
    console.log("Aplikasi running on port 3000");
} );
