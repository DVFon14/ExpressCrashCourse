const express = require('express')
const uuid = require('uuid');
const router = express.Router(); 
const members = require('../../Members') //const members = require('./Members'); this changes because it's no longer in the js file. We need ../ for routes folder and ../ for api folder


//GET ALL MEMBERS

/* since we put the file routes on our index.js, we don't need /api/members here

router.get('/api/members', (req, res)=>{ //when in our index.js file we had app.get. Here, we changed it to router.get
        res.json(members); //return json
});

//Get single member
router.get('/api/members/:id', (req, res) => { //:id is a request paramenter
 const found = members.some(member => member.id === parseInt(req.params.id));
*/


router.get('/', (req, res)=>{ //when in our index.js file we had app.get. Here, we changed it to router.get
    res.json(members); //return json
});

//Get single member
router.get('/:id', (req, res) => { //:id is a request paramenter
const found = members.some(member => member.id === parseInt(req.params.id));




 if(found){
 res.json(members.filter(member => member.id === parseInt(req.params.id))) //parseInt converts a string to an integer so that we are comparing the correct types for ===
 }
 else{
     res.status(400).json ({msg: `Member ${req.params.id} not found`})
 }
});




//CREATE MEMBER
router.post('/', (req, res) => { // eventhough we use / in line 20, we can use it here because the methods are different
    const newMember = {
        id: uuid.v4(), //id: uuid.v4() is a random, universal id package we installed 
        name : req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if(!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Please include a name and email'});
    }

    members.push(newMember);
    res.json(members);

});

module.exports = router;