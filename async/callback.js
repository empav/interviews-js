const orderExample = {
  id: 1,
  tests: [1, 2, 3, 4],
  patient: {
    id: 2,
    firstName: "Emanuele",
    lastName: "Pavan",
    birthDate: "26/11/1981",
    city: "Milan",
  },
};

function getOrder(callback) {
  setTimeout(() => {
    console.log("step1::getOrder", orderExample);
    callback(orderExample);
  }, 1000);
}
function updatePatient(order, callback) {
  setTimeout(() => {
    console.log("step2::updatePatient", order);
    callback(order);
  }, 1000);
}
function saveOrder(order, callback) {
  setTimeout(() => {
    console.log("step3::saveOrder", order);
    callback({ ret: "OK" });
  }, 1000);
}

getOrder((order) => {
  order.patient.city = "Buenos Aires";
  updatePatient(order, (order) => {
    saveOrder(order, (result) => {
      console.log("result", result);
    });
  });
});
