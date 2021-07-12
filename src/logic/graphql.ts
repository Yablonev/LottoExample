import axios from 'axios'

const endpoint = 'http://localhost:8010/proxy/'

const type = 'eurojackpot'

// eslint-disable-next-line
export default async function graphql(): Promise<any> {
  try {
    const result = await axios({
      method: 'POST',
      url: `${endpoint}graphql`,
      data: {
        query: `{
            draw(type: "${type}") {
              draws {
                date
                gameAmount
                numbers
                additionalNumbers
                odds {
                  numberOfWinners
                  odd
                  winningClass
                }
            }
          }
        }`
      }
    })

    return { result: result.data }
  } catch (error) {
    console.error(error)
    return { error }
  }
}