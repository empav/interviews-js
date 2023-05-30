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

function getOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orderExample);
      console.log("step1::getOrder", orderExample);
    }, 1000);
  });
}

function updatePatient(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(order);
      console.log("step2::updatePatient", order);
    }, 1000);
  });
}
function saveOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ret: "OK" });
      console.log("step3::saveOrder");
    }, 1000);
  });
}

getOrder()
  .then((order) => {
    // Step1 Get Order
    return order;
  })
  .then((order) => {
    // Step2 Update Patient
    order.patient.city = "Buenos Aires";
    return updatePatient(order);
  })
  .then((order) => {
    // Step3 Save Order
    return saveOrder(order);
  })
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.error(err);
  });

const promiseExample = new Promise((resolve, reject) => {
  // getOrder() success ----> resolve(order)
  // getOrder() error ----> reject(error)
});

promiseExample()
  .then((result) => {
    //
  })
  .catch((error) => {
    console.error(error);
  });
