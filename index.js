const soap = require('soap');

// Funktion zum Erstellen eines SOAP-Clients und Abrufen von Daten
async function callSoapService(wsdlUrl, functionName, params) {
  return new Promise((resolve, reject) => {
    soap.createClient(wsdlUrl, (err, client) => {
      if (err) {
        reject('Error creating SOAP client: ' + err);
        return;
      }

      // Rufe die gewünschte SOAP-Funktion auf
      client[functionName](params, (err, result) => {
        if (err) {
          reject('Error calling SOAP function: ' + err);
          return;
        }
        resolve(result);
      });
    });
  });
}

module.exports = {
  callSoapService,
};
