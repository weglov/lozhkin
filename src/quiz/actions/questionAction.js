
export function nextQuestion(next) {
  return {
    type: 'NEXT_QUESTION',
    payload: next
  }
}

export function selectQuestion(next) {
  return {
    type: 'SELECT_QUESTION',
    payload: next
  }
}

export function resultSense(next) {
  return {
    type: 'RESULT_SENSE',
    payload: next
  }
}

export function selectSense(next) {
  return {
    type: 'SELECT_SENSE',
    payload: next
  }
}

export function restart(next) {
  return {
    type: 'RESTART_QUIZ',
    payload: next
  }
}