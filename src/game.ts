export class Game {
  private jogadas: number[] = Array(21).fill(0)
  private jogadaAtual: number = 0

  jogar(pinos: number): void {
    this.jogadas[this.jogadaAtual++] = pinos
  }

  score() : number {
    let _score = 0
    let frameIndex = 0

    for(let frame=0; frame<10; frame++) {
      if(this.jogadas[frameIndex] === 10) {
        _score = 10 + this.jogadas[frameIndex + 1] + this.jogadas[frameIndex + 2]
        frameIndex += 1
      }
      if(this.ehSpare(frameIndex)) {
        _score += 10 + this.jogadas[frameIndex + 2]
        frameIndex += 2
      } else {
        _score += this.jogadas[frameIndex] + this.jogadas[frameIndex + 1]
        frameIndex += 2
      }
    }

    return _score
  }

  private ehSpare(frameIndex: number) : boolean {
    return this.jogadas[frameIndex] + this.jogadas[frameIndex + 1] === 10
  }
}
