import fs from 'fs'


fs.writeFile('./blog1.txt', "ich bin webdeveloper" , (err) =>{
    if (err) {
        throw err;
    }
    console.log("data was created");
})

fs.writeFile('./blog2.txt', "Transparente Sonne" , (err) =>{
    if (err) {
        throw err;
    }
    console.log("data was created");
})

fs.access('./assets',fs.constants.F_OK, (err)=>{
    if (err){
        console.error("datei exsistiert nicht")
    }
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log("ordner konnte nicht gelöscht werden");
            
        }fs.mkdir('./assets', (err)=>{
            if(err){
                console.log("Assets konnte nicht erstellt werden");
            }fs.access('./delete.txt',fs.constants.F_OK, (err)=>{
                if (err){
                    console.error("datei DELETE exsistiert nicht")
                }fs.unlink('./delete.txt', (err) =>{
                    if(err){
                        fs.writeFile('./delete.txt',"delete", (err)=>{
                            if(err){
                                console.log("delte konnte nicht erstellt werden");
                            }
                        console.log("konnte nicht gelöscht werden DELETE");
                        })
                    console.log("DELETE wurde gelöscht");}
                })
            })
            })
    })
})

fs.rename('./hello.txt', "./helloworld.txt", (err)=>{
    if (err){
        console.log("konnte nicht umbenenen");
    }

})



