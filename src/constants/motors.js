import {
  SHOULDER_BACKWARD_CHAR,
  SHOULDER_FORWARD_CHAR,
  ELBOW_BACKWARD_CHAR,
  ELBOW_FORWARD_CHAR,
  WRIST_BACKWARD_CHAR,
  WRIST_FORWARD_CHAR,
  GRIPPER_CLOSE_CHAR,
  GRIPPER_OPEN_CHAR,
  FOREARM_CCW_CHAR,
  FOREARM_CW_CHAR,
  BASE_CCW_CHAR,
  BASE_CW_CHAR,
  STOP_MOTORS_CHAR,
} from './motorSignals';

export const MOTORS = [
  {
    text: 'Shoulder',
    lftBtnText: 'Backward',
    rgtBtnText: 'Forward',
    lftBtnChar: SHOULDER_BACKWARD_CHAR,
    rgtBtnChar: SHOULDER_FORWARD_CHAR,
    releaseChar: STOP_MOTORS_CHAR,
  },
  {
    text: 'Elbow',
    lftBtnText: 'Backward',
    rgtBtnText: 'Forward',
    lftBtnChar: ELBOW_BACKWARD_CHAR,
    rgtBtnChar: ELBOW_FORWARD_CHAR,
    releaseChar: STOP_MOTORS_CHAR,
  },
  {
    text: 'Wrist',
    lftBtnText: 'Backward',
    rgtBtnText: 'Forward',
    lftBtnChar: WRIST_BACKWARD_CHAR,
    rgtBtnChar: WRIST_FORWARD_CHAR,
    releaseChar: STOP_MOTORS_CHAR,
  },
  {
    text: 'Gripper',
    lftBtnText: 'Close',
    rgtBtnText: 'Open',
    lftBtnChar: GRIPPER_CLOSE_CHAR,
    rgtBtnChar: GRIPPER_OPEN_CHAR,
    releaseChar: STOP_MOTORS_CHAR,
  },
  {
    text: 'Forearm',
    lftBtnText: 'CCW',
    rgtBtnText: 'CW',
    lftBtnChar: FOREARM_CCW_CHAR,
    rgtBtnChar: FOREARM_CW_CHAR,
    releaseChar: STOP_MOTORS_CHAR,
  },
  {
    text: 'Base',
    lftBtnText: 'CCW',
    rgtBtnText: 'CW',
    lftBtnChar: BASE_CCW_CHAR,
    rgtBtnChar: BASE_CW_CHAR,
    releaseChar: STOP_MOTORS_CHAR,
  },
];
