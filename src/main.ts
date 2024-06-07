
import { spawn,exec } from 'child_process';
import {config} from 'dotenv'
config()

console.log(process.env)
const {
    dialect,
    host,
    port,
    database,
    user,
    password
} = process.env

const cmd = `drizzle-kit introspect --dialect ${dialect} --host ${host} --port ${port} --database ${database} --user ${user} --password ${password}`
exec(cmd)