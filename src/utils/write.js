const fs = require('fs')
let readline = require('readline')

let versionPrefix = '0.0.' // 可控

function fsWrite(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf-8', function(err) {
      if (err) {
        //  console.log('写入内容出错')
        reject(err)
      } else {
        // console.log("写入内容成功")
        resolve(err)
      }
    })
  })
}

let rl = readline.createInterface({
  output: process.stdout,
  input: process.stdin,
})

//设置询问事件
function lcQuestion(title) {
  return new Promise((resolve, reject) => {
    rl.question(title, (answer) => {
      resolve(`${versionPrefix + answer}`)
    })
  })
}
async function createPackage() {
  let packingtime = new Date().toLocaleString()
  let version = await lcQuestion('请您输入版本号？' + versionPrefix)
  let content = ` version: ${version}  packingtime: ${packingtime}  author: wy\n`
  await fsWrite('./public/version.txt', content)
  rl.close() // 写完关闭
}

createPackage()

rl.on('close', function() {
  process.exit(0)
})