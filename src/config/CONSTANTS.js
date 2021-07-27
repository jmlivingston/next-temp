const BASE_URL = typeof window !== 'undefined' ? window.location.origin : '';
const API_ROUTES = Object.freeze({
  PAYMENT_INIT: `${BASE_URL}/api/payment/init`,
  PAYMENT: `${BASE_URL}/api/payment`,
});

const ENV_KEY = 'B';
const AWS_ACCESS_KEY_ID = process.env[`AWS_ACCESS_KEY_ID_${ENV_KEY}`];
const AWS_S3_BUCKET = process.env[`AWS_S3_BUCKET_${ENV_KEY}`];
const AWS_SECRET_ACCESS_KEY = process.env[`AWS_SECRET_ACCESS_KEY_${ENV_KEY}`];
const AWS_SIGNATURE_VERSION = 'v4';

const LOCAL_STORAGE_KEY = Object.freeze({
  PAYMENT_DETAILS: 'PAYMENT_DETAILS',
});

const NEUVEI_API_BASE_URL = process.env.NEUVEI_API_BASE_URL;
const NEUVEI_API_GET_SESSION = process.env.NEUVEI_API_GET_SESSION;
const NEUVEI_API_INIT_PAYMENT = process.env.NEUVEI_API_INIT_PAYMENT;
const NEUVEI_API_PAYMENT = process.env.NEUVEI_API_PAYMENT;
const NEUVEI_API_CHALLENGE = process.env.NEXT_PUBLIC_NEUVEI_API_CHALLENGE;
const NEUVEI_API_CHALLENGE_SIMULATOR = ({ acsUrl, cReq }) =>
  `https://docs.safecharge.com/3Dsimulator/showUrl.php?acsUrl=${acsUrl}&creq=${cReq}`;
const NEUVEI_CONFIG = Object.freeze({
  // See https://docs.safecharge.com/documentation/guides/testing/testing-cards
  CARDS: {
    VISA_APPROVED: '4000027891380961',
    VISA_DECLINE: '4001152882620768',
    VISA_DO_NOT_HONOR: '4000164166749263',
  },
});
const NEUVEI_KEY = process.env.NEUVEI_KEY;
const NEUVEI_MERCHANT_ID = process.env.NEUVEI_MERCHANT_ID;
const NEUVEI_MERCHANT_SITE_ID = process.env.NEUVEI_MERCHANT_SITE_ID;
const NEUVEI_TRANSACTION_STATUS = Object.freeze({
  APPROVED: 'APPROVED',
  REDIRECT: 'REDIRECT',
});

const NEUVEI_3D_MODE = Object.freeze({
  CHALLENGE: 'CHALLENGE',
  FRICTIONLESS: 'FRICTIONLESS',
  FALLBACK: 'FALLBACK',
});

const NEXT_PUBLIC_JENKINS_URL = process.env.NEXT_PUBLIC_JENKINS_URL;
const NEXT_PUBLIC_JENKINS_USER_TOKEN = process.env.NEXT_PUBLIC_JENKINS_URL;

const OPTIMIZELY_CONFIG = JSON.parse(process.env.NEXT_PUBLIC_OPTIMIZELY_CONFIG);

const PAYMENT_FLOW_STATE = Object.freeze({
  CHALLENGE: 'Challenge',
  COMPLETE: 'Complete',
  LIABILITY_SHIFT: 'Liability shift',
  UNSUBMITTED: 'Not submitted',
});

const disabled = true;
const ROUTES = Object.freeze({
  CONVERT_FILE: {
    disabled,
    display: 'Convert File',
    path: '/pages/convert-file',
  },
  FSM: { disabled, display: 'Simple FSM', path: '/pages/fsm' },
  HOME: { display: 'Home', path: '/' },
  JENKINS: { disabled, display: 'Jenkins', path: '/pages/jenkins' },
  OPTIMIZELY: { disabled, display: 'Optimizely', path: '/reservations/start' },
  PAYMENT: { display: 'Payment', path: '/pages/payment' },
  PAYMENT_DIAGRAM: { display: 'Payment Diagram', path: '/pages/payment-diagram' },
  PAYMENT_CARD_TABLE: { display: 'Payment Cards', path: '/pages/payment-card-table' },
  PAYMENT_CHALLENGE: { display: 'Payment Challenge', path: '/pages/payment-challenge', disabled },
  PAYMENT_COMPLETE: { display: 'Payment Complete', path: '/pages/payment-complete', disabled },
  PAYMENT_NOTIFICATION_URL: {
    display: 'Payment Complete',
    path: `${BASE_URL}/pages/payment?challenge=accepted`,
    disabled: true,
  },
});

export {
  API_ROUTES,
  AWS_ACCESS_KEY_ID,
  AWS_S3_BUCKET,
  AWS_SECRET_ACCESS_KEY,
  AWS_SIGNATURE_VERSION,
  ENV_KEY,
  LOCAL_STORAGE_KEY,
  NEUVEI_API_BASE_URL,
  NEUVEI_API_GET_SESSION,
  NEUVEI_API_INIT_PAYMENT,
  NEUVEI_API_PAYMENT,
  NEUVEI_API_CHALLENGE,
  NEUVEI_API_CHALLENGE_SIMULATOR,
  NEUVEI_CONFIG,
  NEUVEI_KEY,
  NEUVEI_MERCHANT_ID,
  NEUVEI_MERCHANT_SITE_ID,
  NEUVEI_3D_MODE,
  NEUVEI_TRANSACTION_STATUS,
  NEXT_PUBLIC_JENKINS_URL,
  NEXT_PUBLIC_JENKINS_USER_TOKEN,
  OPTIMIZELY_CONFIG,
  PAYMENT_FLOW_STATE,
  ROUTES,
};

// Example OPTIMIZELY_CONFIG
// {
//   experiments: {
//     101: {
//       id: '101',
//       name: 'One zero one',
//       variations: {
//         201: {
//           id: '201',
//           name: 'Two zero one',
//         },
//         202: {
//           id: '202',
//           name: 'Two zero two',
//         },
//         203: {
//           id: '203',
//           name: 'Two zero three',
//         },
//       },
//     },
//   },
// }