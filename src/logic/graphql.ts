import axios from 'axios'

const endpoint = 'http://localhost:8010/proxy/'

export default async function graphql(): Promise<any> {
  try {
    const result = await axios({
      method: 'POST',
      url: `${endpoint}graphql`,
      data: {
        query: `{
            draw(type: "eurojackpot") {
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