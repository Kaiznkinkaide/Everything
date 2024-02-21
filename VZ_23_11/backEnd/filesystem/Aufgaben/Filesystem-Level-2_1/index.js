import fs from 'fs'



fs.readFile('./data.json',{encoding: 'utf-8'}, (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    let neueData = JSON.parse(data)

    neueData.map((data)=>{
        fs.writeFile('./data.txt', data.id + "\n" + data.title + "\n" + data.description + "\n" ,{flag: 'a'} ,(err)=>{
            if (err){
            throw err;
        }
        console.log("file has been written");
        })
    })
    // for (let i = 0; i < data.length; i++){
    // fs.writeFile('./data.txt', data[0].id + "- " + data[0].value + "\n", (err) => {
    //     if(err){0
    //         throw err;
    //     }
    //     console.log("file has been writen");
    // })}
})

