const admin = require('firebase-admin');
const serviceAccount = require("./key_service_account.json")
const data = require("./card_list.json");
const collectionKey = "cardList";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = (admin.firestore());
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")){
    Object.keys(data).forEach(docKey => {
        firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
            console.log("Documento " + docKey + " escrito correctamente");
        }).catch((error) => {
            console.error("Error al escribir el documento: " + error);
        });
    });
}