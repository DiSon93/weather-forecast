
import AsyncStorage from '@react-native-async-storage/async-storage';

const REDUX_PERSIST = {
    active: true,
    reducerVersion: '1.1',
    storeConfig: {
        key: 'primary',
        // storage: storage,
        // Reducer keys that you do NOT want stored to persistence here.
        blacklist: [],
        // Optionally, just specify the keys you DO want stored to persistence.
        // An empty array means 'don't store any reducers' -> infinitered/ignite#409
        whitelist: ['whiteList'],
        storage: AsyncStorage,
    },
};

export default REDUX_PERSIST;
