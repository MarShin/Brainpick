import firebase from 'react-native-firebase';

export const START_FETCHING_TASKS = 'START_FETCHING_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';

const ref = firebase.firestore().collection('tasks');

export const startFetchingTasks = () => ({
  type: START_FETCHING_TASKS
});

export const receivedTasks = tasks => ({
  type: RECEIVED_TASKS,
  receivedAt: Date().toString(),
  tasks
});

export const fetchTasks = () =>
  function handleFetchTasks(dispatch) {
    dispatch(startFetchingTasks());
    ref
      .get()
      .then((querySnapshot) => {
        const tasks = [];
        querySnapshot.forEach((doc) => {
          const { name, complete } = doc.data();
          tasks.push({
            key: doc.id,
            doc, // DocumentSnapshot
            name,
            complete
          });
        });
        dispatch(receivedTasks(tasks));
      })
      .catch((error) => {
        console.log('Fetching tasks failed: ', error);
      });
  };
