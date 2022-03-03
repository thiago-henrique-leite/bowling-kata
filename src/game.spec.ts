import { Game } from './game'

describe('Boliche', () => {
  test('quando o jogador não acerta nenhum pino', () => {
    const game = new Game()

    for(let i=0; i<20; i++) {
      game.jogar(0)
    }

    expect(game.score()).toBe(0)
  })

  test('quando o jogador acerta um pino em todas as jogadas', () => {
    const game = new Game()

    for(let i=0; i<20; i++) {
      game.jogar(1)
    }

    expect(game.score()).toBe(20)
  })
})