const app =  require("express")();

const PORT_NUMBER = 5001;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`)
});

app.get("/", (req,res) => {
    res.send({"message": "Heyyyy"})
});