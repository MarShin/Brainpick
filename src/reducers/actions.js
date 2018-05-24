export const startNewTask = id => ({
  type: 'START_NEW_TASK',
  id
});

export const finishCurrentTask = () => ({
  type: 'FINISH_CURRENT_TASK'
});

export const nextStepInCurrentTask = () => ({
  type: 'INCREMENT_CURRENT_TASK_STEP'
});

export const prevStepInCurrentTask = () => ({
  type: 'DECREMENT_CURRENT_TASK_STEP'
});

export const updateCurrentTaskReponse = response => ({
  type: 'UPDATE_CURRENT_TASK',
  response
});
