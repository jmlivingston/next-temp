import { NEUVEI_MODES } from '../../../utility/CONSTANTS';

const payment = ({ cardNumber, cardHolderName, isSecondPayment, mode, notificationURL }) => {
  mode = mode || NEUVEI_MODES.THREE_D_CHALLENGE;

  switch (mode) {
    case NEUVEI_MODES.THREE_D_CHALLENGE:
      cardNumber = '4000020951595032';
      cardHolderName = 'CL-BRW1';
      notificationURL = 'https://docs.safecharge.com/3Dsimulator/notificationUrl.php';
      break;
    case NEUVEI_MODES.THREE_D_FRICTIONLESS:
      cardNumber = '4000027891380961';
      cardHolderName = 'FL-BRW1';
      notificationURL = 'http://www.The-Merchant-Website-Fully-Quallified-URL.com';
      break;
    case NEUVEI_MODES.THREE_D_FALLBACK:
      cardNumber = '4012001037141112';
      cardHolderName = 'john smith';
      notificationURL = undefined;
      break;
    default:
      break;
  }

  return {
    sessionToken: '{{sessionToken}}',
    merchantId: '{{merchantId}}',
    merchantSiteId: '{{merchantSiteId}}',
    clientRequestId: '{{clientRequestId}}',
    timeStamp: '{{timestamp}}',
    checksum: '{{checksum}}',
    currency: '{{currency}}',
    amount: '{{amount}}',
    relatedTransactionId: '{{initPaymentTransactionId}}',
    paymentOption: {
      card: {
        cardNumber: '4000020951595032',
        cardHolderName: 'CL-BRW1',
        expirationMonth: '12',
        expirationYear: '25',
        CVV: '217',
        threeD: {
          methodCompletionInd: 'U',
          version: '{{threeDVersion}}',
          notificationURL: '{{notificationUrl}}',
          merchantURL: 'http://www.The-Merchant-Website-Fully-Quallified-URL.com',
          platformType: '02',
          v2AdditionalParams: {
            challengePreference: '01',
            deliveryEmail: 'The_Email_Address_The_Merchandise_Was_Delivered@yoyoyo.com',
            deliveryTimeFrame: '03',
            giftCardAmount: '1',
            giftCardCount: '41',
            giftCardCurrency: 'USD',
            preOrderDate: '20220511',
            preOrderPurchaseInd: '02',
            reorderItemsInd: '01',
            shipIndicator: '06',
            rebillExpiry: '20200101',
            rebillFrequency: '13',
            challengeWindowSize: '05',
          },
          browserDetails: {
            acceptHeader: 'text/html,application/xhtml+xml',
            ip: '192.168.1.11',
            javaEnabled: 'TRUE',
            javaScriptEnabled: 'TRUE',
            language: 'EN',
            colorDepth: '48',
            screenHeight: '400',
            screenWidth: '600',
            timeZone: '0',
            userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47',
          },
          account: {
            age: '05',
            lastChangeDate: '20190220',
            lastChangeInd: '04',
            registrationDate: '20190221',
            passwordChangeDate: '20190222',
            resetInd: '01',
            purchasesCount6M: '6',
            addCardAttempts24H: '24',
            transactionsCount24H: '23',
            transactionsCount1Y: '998',
            cardSavedDate: '20190223',
            cardSavedInd: '02',
            addressFirstUseDate: '20190224',
            addressFirstUseInd: '03',
            nameInd: '02',
            suspiciousActivityInd: '01',
          },
        },
      },
    },
    billingAddress: {
      firstName: 'John',
      lastName: 'Smith',
      address: '340689 main St.',
      city: 'London',
      country: 'GB',
      email: 'john.smith@safecharge.com',
    },
    shippingAddress: {
      firstName: 'John',
      lastName: 'Smith',
      address: '340689 main St.',
      city: 'London',
      country: 'GB',
      email: 'john.smith@safecharge.com',
    },
    deviceDetails: {
      ipAddress: '93.146.254.172',
    },
  };
};

export default payment;
