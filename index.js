const fs = require("fs").promises;
const fsSync = require("fs");

// synchronous file.write
// membaca file txt
let tesFile = fsSync.readFileSync("./index.txt", "utf-8");

// proses print isi dari file txt
console.log(`from line 7 : ${tesFile}`);

// buat file baru txt
// define untuk isi file baru
const fileTxtBaru = "tes FSW222222"
const result = fsSync.writeFileSync("./fileKedua.txt", fileTxtBaru);

// create new folder
// fs.mkdir("cobaFolder2", () => {});

// menimpa isi kontent dari index txt
fsSync.writeFileSync("./index.txt","cek dulu")


// asyncronus file / write
// read file
async function tesAsync(){

    try{
        const bacaTesFile = await fs.readFile('./index.txt', "utf-8");
        console.log(`ini tes line 29 : ${bacaTesFile}`); 
    }catch(error){
        console.log(error);
    }

}

tesAsync();

// fs.readFile("./index.txt", "utf-8")
//     .then((tesFile) => {

//         console.log(`ini isi surat async ${tesFile}`);
//     })

// setTimeout(() => {});

console.log(`from line 46 : ${tesFile}`);