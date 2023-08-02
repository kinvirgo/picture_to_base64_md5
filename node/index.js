const path = require("path")
const fs = require("fs")
const crypto = require("crypto")

const file = path.join(__dirname, "./pic.jpg"),
    buffer = fs.readFileSync(file),
    base64data = buffer.toString('base64')


fs.writeFileSync("./base64.txt", `base64:\n${base64data}\n`)


const md5 = crypto.createHash('md5').update(buffer).digest('hex')

fs.appendFileSync("./base64.txt", `\nmd5:\n${md5}\n`)