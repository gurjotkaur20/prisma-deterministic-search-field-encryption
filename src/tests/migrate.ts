// @ts-ignore
import { migrate } from './migrations'
import { createClient, defaultMiddleware } from './prismaClient'

const client = createClient(defaultMiddleware)

async function main() {
  await Promise.all([
    client.user.create({
      data: {
        email: `foo+${Date.now()}@example.com`,
        name: `Foo ${Date.now()}`
      }
    }),
    client.user.create({
      data: {
        email: `bar+${Date.now()}@example.com`,
        name: `Bar ${Date.now()}`
      }
    }),
    client.user.create({
      data: {
        email: `egg+${Date.now()}@example.com`,
        name: `Egg ${Date.now()}`
      }
    }),
    client.user.create({
      data: {
        email: `spam+${Date.now()}@example.com`,
        name: `Spam ${Date.now()}`
      }
    })
  ])
  await migrate(client)
}

if (require.main === module) {
  main()
}
