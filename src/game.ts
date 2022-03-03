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
      if(this.ehStrike(frameIndex)) {
        _score = this.bonusStrike(frameIndex)
        frameIndex += 1
      }
      if(this.ehSpare(frameIndex)) {
        _score += this.bonusSpare(frameIndex)
        frameIndex += 2
      } else {
        _score += this.jogadaNormal(frameIndex)
        frameIndex += 2
      }
    }

    return _score
  }

  private ehStrike(frameIndex: number) : boolean {
    return this.jogadas[frameIndex] === 10
  }

  private ehSpare(frameIndex: number) : boolean {
    return this.jogadas[frameIndex] + this.jogadas[frameIndex + 1] === 10
  }

  private bonusStrike(frameIndex: number) : number {
    return 10 + this.jogadas[frameIndex + 1] + this.jogadas[frameIndex + 2]
  }

  private bonusSpare(frameIndex: number) : number {
    return 10 + this.jogadas[frameIndex + 2]
  }

  private jogadaNormal(frameIndex: number) : number {
    return this.jogadas[frameIndex] + this.jogadas[frameIndex + 1]
  }
}
