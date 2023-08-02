import { crypto, toHashString } from 'https://deno.land/std/crypto/mod.ts'

// 读取文件
const file = Deno.readFileSync('./pic.jpg')

const base64 = toHashString(file, 'base64')
// 写入文件
Deno.writeFileSync('./base64.txt', new TextEncoder().encode(`\nbase64:\n  ${base64}\n`))

const md5 = crypto.subtle.digestSync('MD5', file)

const _md5 = toHashString(md5)

Deno.writeFileSync('./base64.txt', new TextEncoder().encode(`\nMD5:\n  ${_md5}\n`), {
    append: true,
})
