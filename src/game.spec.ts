import { Game } from './game'

let game: Game

beforeEach(() => {
  game = new Game()
})

describe('Boliche', () => {
  test('quando o jogador não acerta nenhum pino', () => {
    realizarJogadas(20, 0)
    expect(game.score()).toBe(0)
  })

  test('quando o jogador acerta um pino em todas as jogadas', () => {
    realizarJogadas(20, 1)
    expect(game.score()).toBe(20)
  })
})

function realizarJogadas(num_jogadas: number, pinos: number) {
  for(let i=0; i<num_jogadas; i++) {
    game.jogar(pinos)
  }
}
