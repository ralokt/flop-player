import { GameStatus } from '@/status'
import { GameBoard } from '@/game'

export interface State {
  width: number
  height: number
  // 是否游戏结束
  gameOver: boolean
  // 游戏状态
  gameStatus: GameStatus
  // 游戏级别，1-初级，2-中级，3-高级，4-自定义
  gameLevel: 1 | 2 | 3 | 4
  // 游戏棋盘
  gameBoard: GameBoard
}

export const state: State = {
  width: 8,
  height: 8,
  gameOver: false,
  gameStatus: GameStatus.Play,
  gameLevel: 1,
  gameBoard: new GameBoard(0, 0, '')
}