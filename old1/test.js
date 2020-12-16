let text = 'Hello World!'

console.log(text.replace(/[l]/g), '')

text = text.replace(/[<>!,.?]/gm, '')
console.log(text)