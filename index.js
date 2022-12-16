const express = require("express")
const app = express();
const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey:"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",
    organization:"Shoaib Ihsan"
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

app.get("/hello",(req,res)=>{
  res.send({
    "msg":"hello"
  })
})


app.listen(5000,()=>{
    console.log("running on port"+port)
})