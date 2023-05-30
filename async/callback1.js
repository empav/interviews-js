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
  //Codigo para leer un order
  //...
  callback(orderExample);
}
function updatePatient(order, callback) {
  order.patient.city = "Buenos Aires";
  //Codigo para leer un order
  callback(order);
}
function saveOrder(order, callback) {}

getOrder(function (order) {
  console.log("order", order);
  updatePatient(order, function (callback) {
    saveOrder(order, function (result) {
      console.log("result", result);
    });
  });
});

1 - getOrder();
2 - updatePatient(order);
3 - saveOrder(order);

setTimeout(() => {
  // asd
}, 1000);
