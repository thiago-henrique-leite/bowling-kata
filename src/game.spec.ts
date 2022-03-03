import { Game } from './game'

describe('Boliche', () => {
  const game = new Game()

  test('quando o jogador não acerta nenhum pino', () => {
    for(let i=0; i<20; i++) {
      game.jogar(0)
    }

    expect(game.score()).toBe(0)
  })
})