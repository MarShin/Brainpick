import firebase, { firestore } from 'react-native-firebase';

export const START_FETCHING_TASKS = 'START_FETCHING_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';

const ref = firebase.firestore().collection('tasks');

export const startFetchingTasks = () => ({
  type: START_FETCHING_TASKS
});

export const receivedTasks = () => ({
  type: RECEIVED_TASKS,
  receivedAt: Date.now()
});

const onCollectionUpdate = (querySnapshot) => {
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
};

export const fetchTasks = () =>
  function (dispatch) {
    //   console.log('inside Action/taskList fetchTasks');
    dispatch(startFetchingTasks());
    // for contiuous listening to update event
    //   const unsubscriber = ref.onSnapshot(onCollectionUpdate);

    //   firestore
    //     .runTransaction(async (transaction) => {
    //       const doc = await transaction.get(ref);

    //       // if it does not exist set the population to one
    //       if (!doc.exists) {
    //         console.log('snapshot not exist');
    //       } else {
    //         console.log('doc: ', doc);
    //       }
    //     })
    //     // .then(newPopulation => {
    //     //   console.log(
    //     //     `Transaction successfully committed and new population is '${newPopulation}'.`
    //     //   );
    //     // })
    //     .catch((error) => {
    //       console.log('Transaction failed: ', error);
    //     });
  };
