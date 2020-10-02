import { UPDATE_DURATION } from '../actions/DurationAction';
import { UPDATE_DATE } from '../actions/CalActions';
import { UPDATE_ROOM } from '../actions/RoomActions';
import { UPDATE_TIME_SLOT } from '../actions/TimeSlotActions';
import { UPDATE_STEP } from '../actions/StepsActions';

export const initialState = {
  user: 'TestUser',
  duration: '0', // 1-2 hours, 3-4 hours, 6 hours
  date: '2011-11-11', //'Any present or future date'
  room: 'None', // 'CoWorker or Media'
  time_slot: 'None', // Examples of times 10,11,12,13,14,15,16,17 (10am - 5pm)
  currentStep: 2, // 0-2 (Pick time), (date/ room/ time slot), (finalize/ donate)
};

export const makeResReducer = (state = initialState, action) => {
  console.log('ACTION FROM REDUCER ====>', 'Initial State', state);
  switch (action.type) {
    case UPDATE_DURATION:
      return {
        ...state,
        duration: action.payload,
      };
    case UPDATE_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case UPDATE_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case UPDATE_TIME_SLOT:
      return {
        ...state,
        time_slot: action.payload,
      };
    case UPDATE_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    default:
      return state;
  }
};