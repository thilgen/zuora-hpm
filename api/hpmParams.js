require('dotenv').config();

const axios = require('axios')
const auth = require('../util/auth');
const zuora = require('../util/zuoraEndpoints');

const getHpmParams = async (zuoraAccountId) => {
    let authTokenResponse = await auth.getAuthToken();
    let access_token = authTokenResponse.data.access_token;

    let hpmPageId = process.env.ZUORA_HPM_PAGE_ID

    let response = await axios({
      method: 'post',
      url: zuora.ENDPOINT + '/v1/rsa-signatures',
      data: {
        method: 'POST',
        uri: zuora.HPM_URI,
        pageId: hpmPageId,
        accountId: zuoraAccountId
      },
      headers: {
        'content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    });

    let zuoraGatewayName = process.env.ZUORA_GATEWAY_NAME

    hpmParams = {}
    hpmParams.signature = response.data.signature
    hpmParams.token = response.data.token
    hpmParams.tenantId = response.data.tenantId
    hpmParams.key = response.data.key
    hpmParams.id = hpmPageId
    hpmParams.field_accountId = zuoraAccountId // must match the value passed into /v1/rsa-signatures endpoint
    hpmParams.paymentGateway = zuoraGatewayName
    hpmParams.url = zuora.HPM_URI
    hpmParams.style = 'inline'
    hpmParams.submitEnabled = 'true'
    hpmParams.locale = 'en'
    hpmParams.param_supportedTypes = 'Visa,MasterCard,Discover'

    return hpmParams
}

exports.getHpmParams = getHpmParams;
