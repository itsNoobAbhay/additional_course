const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'root.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login_page.html'));
});

app.post('/course', (req, res) => {

    const { fname, lname, roll_no, branch, sem, mobile_number, otp } = req.body

    const students = JSON.parse(fs.readFileSync('./public/json/database.json', 'utf8'));


    const studentExists = students.some(
        (student) =>
            student.fname.toLowerCase() == fname.toLowerCase() &&
            student.lname.toLowerCase() == lname.toLowerCase() &&
            student.roll_no == roll_no &&
            student.branch == branch &&
            student.mobile_number == mobile_number
    )
    if (!studentExists) {
        // Student not found
        console.log("Current student not in database")
        return res.redirect('/login?error=1');

    }


    if (branch === 'IT' && sem === '1')
        res.sendFile(path.join(__dirname, 'public', 'templates/webDesign.html'));
    else if (branch === 'IT' && sem === '2') 
        res.sendFile(path.join(__dirname, 'public', 'templates/rpa.html'));
    else if (branch === 'IT' && sem === '3') 
        res.sendFile(path.join(__dirname, 'public', 'templates/aiml.html'));
    else if (branch === 'IT' && sem === '4') 
        res.sendFile(path.join(__dirname, 'public', 'templates/nodejs.html'));
    else if (branch === 'IT' && sem === '5') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cyberSecurity.html'));
    else if (branch === 'IT' && sem === '6') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cloudComputing.html'));

    if (branch === 'CS' && sem === '1')
        res.sendFile(path.join(__dirname, 'public', 'templates/webDesign.html'));
    else if (branch === 'CS' && sem === '2') 
        res.sendFile(path.join(__dirname, 'public', 'templates/rpa.html'));
    else if (branch === 'CS' && sem === '3') 
        res.sendFile(path.join(__dirname, 'public', 'templates/aiml.html'));
    else if (branch === 'CS' && sem === '4') 
        res.sendFile(path.join(__dirname, 'public', 'templates/nodejs.html'));
    else if (branch === 'CS' && sem === '5') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cyberSecurity.html'));
    else if (branch === 'CS' && sem === '6') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cloudComputing.html'));

    if (branch === 'DS' && sem === '1')
        res.sendFile(path.join(__dirname, 'public', 'templates/webDesign.html'));
    else if (branch === 'DS' && sem === '2') 
        res.sendFile(path.join(__dirname, 'public', 'templates/rpa.html'));
    else if (branch === 'DS' && sem === '3') 
        res.sendFile(path.join(__dirname, 'public', 'templates/aiml.html'));
    else if (branch === 'DS' && sem === '4') 
        res.sendFile(path.join(__dirname, 'public', 'templates/nodejs.html'));
    else if (branch === 'DS' && sem === '5') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cyberSecurity.html'));
    else if (branch === 'DS' && sem === '6') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cloudComputing.html'));

    if (branch === 'BCA' && sem === '1')
        res.sendFile(path.join(__dirname, 'public', 'templates/webDesign.html'));
    else if (branch === 'BCA' && sem === '2') 
        res.sendFile(path.join(__dirname, 'public', 'templates/rpa.html'));
    else if (branch === 'BCA' && sem === '3') 
        res.sendFile(path.join(__dirname, 'public', 'templates/aiml.html'));
    else if (branch === 'BCA' && sem === '4') 
        res.sendFile(path.join(__dirname, 'public', 'templates/nodejs.html'));
    else if (branch === 'BCA' && sem === '5') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cyberSecurity.html'));
    else if (branch === 'BCA' && sem === '6') 
        res.sendFile(path.join(__dirname, 'public', 'templates/cloudComputing.html'));

    


    
    
});

app.get('/payment1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'templates/payment1.html'));
});
app.get('/payment2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'templates/payment2.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
