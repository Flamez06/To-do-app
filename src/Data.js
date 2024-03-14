import fs from "fs"
function SaveData(data){
    const jsonData=JSON.stringify(data)
    try {
        fs.writeFileSync('data.json', JSON.stringify(data));
    } catch (err) {
        console.error('Error writing tasks file', err);
    }
}
function ReadData(){
    try{
        var data = fs.readFileSync("data.json","utf8") 
        data = JSON.parse(data)
        return data
    }catch(e){
        console.log(e)
    }
}
export {SaveData,ReadData}