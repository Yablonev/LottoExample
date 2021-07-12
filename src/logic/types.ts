type Odds = {
  numberOfWinners: string[],
  odd: string[],
  winningClass: string[],
}

export type JackpotResultType = {
  date: string,
  gameAmount: string,
  numbers: string[],
  additionalNumbers: string[],
  odds: Odds[]
}

export type WinnersType = {
  winningClass: number,
  numberOfWinners: string,
  odd: string,
}