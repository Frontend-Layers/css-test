import xml2js from 'xml2js'
const parser = new xml2js.Parser();
import axios from 'axios'

const cssTest = async (url) => {
  try {
    const response = await axios.get(`https://jigsaw.w3.org/css-validator/validator?uri=${url}&warning=0&profile=css3&output=soap12`);
    const data = response.data

    if (data) {
      parser.parseString(data, function (err, result) {
        const errorsCount = result['env:Envelope']['env:Body'][0]['m:cssvalidationresponse'][0]['m:result'][0]['m:errors'][0]['m:errorcount'][0]
        const errorsList = result['env:Envelope']['env:Body'][0]['m:cssvalidationresponse'][0]['m:result'][0]['m:errors'][0]['m:errorlist'][0]['m:error']

        if (errorsCount && errorsList) {
          console.log('\nCSS Errors: ', errorsCount);

          errorsList.forEach(msg => {
            console.log('[' + msg['m:line'][0] + ']: ' + msg['m:message'][0].replace(/[^a-zA-Z ]/g, "").trim())
          })
        }
      });

    }
  } catch (error) {
    // console.error(error);
    console.log('CSS Test Error');
  }
}


export default cssTest