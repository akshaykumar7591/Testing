const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const inputArray = req.body.array;
        const userId = "john_doe_17091999";
        const email = "john.doe@example.com";
        const collegeRollNumber = "CU123456";

        const evenNumbers = inputArray.filter(num => num % 2 === 0);
        const oddNumbers = inputArray.filter(num => num % 2 !== 0);
        const uppercaseAlphabets = inputArray.filter(char => /^[A-Za-z]$/.test(char)).map(char => char.toUpperCase());

        const responseObject = {
            user_id: userId,
            email_id: email,
            college_roll_number: collegeRollNumber,
            is_success: true,
            even_numbers: evenNumbers,
            odd_numbers: oddNumbers,
            uppercase_alphabets: uppercaseAlphabets
        };

        res.json(responseObject);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});