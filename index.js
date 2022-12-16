const express = require("express")
const app = express();
const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey:"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",
  });
const openai = new OpenAIApi(configuration);


app.get("/answer_the_question",async(req,res)=>{
    let question = req.query.question
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question.toString(),
        max_tokens: 1000,
        temperature: 1,
      });
   
    res.send({
        "result":response.data.choices
    })
})

// let host;
// require('dns').lookup(require('os').hostname(), function (err, add, fam) {
//    host= add
//    console.log("Your Host is "+add)
// })


app.listen(5000,()=>{
    console.log("running on port"+port)
})