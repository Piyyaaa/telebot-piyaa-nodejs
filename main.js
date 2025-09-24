require("dotenv").config()
const Telebot = require("./app/Telebot")

const token = process.env.TELEGRAM_TOKEN
const options = {
    polling : true
}

console.log("starting feature..")
const telebot = new Telebot(token, options)

const main = () => {
    console.log("checking feature..")
    telebot.getSticker()
    telebot.getGreeting()
    telebot.getFollow()
    telebot.getQuotes()
    telebot.getNews()
    telebot.getQuake()
    telebot.getHelp()
    console.log("feature ready..")
}

main()
console.log("bot is ready now!")