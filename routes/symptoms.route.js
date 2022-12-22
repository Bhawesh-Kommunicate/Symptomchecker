// const {getSymptomsController} = require("../controller/symptomsController")

const { StoreSex, StoreAge ,SymptomStore,getDefaultSymptoms ,emailStore } = require("../controller/symptomsController");

// const {StoreSex} = re
const getSymptoms = (app) => {
  app.post("/symptoms/api/v1/SymptomStore" ,SymptomStore )
  app.get("/symptoms" , getDefaultSymptoms);
};

module.exports = { getSymptoms };
