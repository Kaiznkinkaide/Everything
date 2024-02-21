import fs from 'fs'

const funky = (para) =>{
    fs.access(`./ordner/text.txt`, (err)=>{
        if(err){
            fs.writeFile('./ordner/text.txt', `${para}`, (err)=>{
                console.log("nwar nicht da, wird erstellt");
            })
        }else{
            fs.writeFile('./ordner/text.txt','\n' +`${para}` , {flag: "a"}, (err)=>{
                if(err){
                    console.log("new para not added");
                }
            })
        }
    })

}



fs.mkdir('./ordner', (err)=>{
    if (err){
        console.log("Ordner NEIN");
    }funky("holyhoden")
})