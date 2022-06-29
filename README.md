Local webapp demo that shows how to use Zuora HPM to create a new PaymentMethod and pay Invoices

<img src="https://github.com/thilgen/zuora-hpm/blob/main/hpm-screenshot.png" height="750" />

## Installation

```sh
npm install
```
## Setup
Create a `.env` file in the root of the project and supply the following values

```
ZUORA_CLIENT_ID='<Client ID of your OAuth Client>'
ZUORA_CLIENT_SECRET='<Client Secret of your OAuth Client>'
ZUORA_ACCOUNT_ID='<Zuora Account ID GUID>'
ZUORA_HPM_PAGE_ID='<Zuora HPM ID GUID>'
ZUORA_GATEWAY_NAME='<Gateway Name used by ZUORA_HPM_PAGE_ID>'
```
### Zuora OAuth 
Generate ZUORA_CLIENT_ID and ZUORA_CLIENT_SECRET on your Profile page in Zuora (found under Administration)
![Screen Shot 2022-06-29 at 12 25 52 PM](https://user-images.githubusercontent.com/9309340/176519838-304e0343-ba6d-473e-8c5a-c8745ccd149d.png)

## Usage
```sh
node webapp.js
```

**Main Page**
* http://localhost:8180/

**Backend Endpoints**
* http://localhost:8180/api/invoices
* http://localhost:8180/api/hpmParams
