import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { staticPlugin } from '@elysiajs/static'
import { swagger } from '@elysiajs/swagger'
import { trpc } from '@elysiajs/trpc'
import { mergedRouters } from './routers'

const app = new Elysia()
    .use(cors())
    .use(swagger())
    .use(staticPlugin({prefix: ''}))
    .use(trpc(mergedRouters))
    .get('/', () => 'root')
    .listen(8080)

export type App = typeof app

console.log(
    `Server @ ${app.server?.hostname}:${app.server?.port}`
)
