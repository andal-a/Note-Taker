const nData = require("../db/db.json");
const fs = require('fs');

//Routing
module.exports = function(app) {
    //GET Request fo and for reading and returning notes saved in JSON
    app.get("/api/notes", function(req, res) {
        fs.readFileSync("./db/db.json", "utf8", function(error, data) {});
        return res.json(nData);
    });

    //POST Request
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        let noteID = (nData.length).toString();
        newNote.id = noteID;
        nData.push(newNote);
        return res.json(newNote)
    });

    //Delete Request
    app.delete("/api/notes/:id", function(req, res){
        
        // Obtains id and converts to a string
        let id = req.params.id.toString();

        // Goes through notesArray searching for matching ID
        for (i=0; i < nData.length; i++){
           
            if (nData[i].id == id){
                // responds with deleted note
                res.send(nData[i]);

                // Removes the deleted note
                nData.splice(i,1);
                break;
            }
        }
    });
};