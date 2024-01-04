import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { MergedRouter } from '@server/src/routers'

const trpc = createTRPCProxyClient<MergedRouter>({
	links: [httpBatchLink({ url: 'http://localhost:8080/trpc' })],
})

export { type MergedRouter, trpc }
