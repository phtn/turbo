import {mergeRouter, procedure, router} from '../trpc/'

const defaultRouter = router({
  connect: procedure.query(async () => '🗄️ Server 🤝')
})

export const mergedRouters = mergeRouter(defaultRouter)

export type DefaultRouter = typeof defaultRouter
export type MergedRouter = typeof mergedRouters
