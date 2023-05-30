const mockedOrder = {
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
      console.log("step1::getOrder", mockedOrder);
      resolve(mockedOrder);
    }, 1000);
  });
}
function updatePatient(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step2::updatePatient", order);
      resolve(order);
    }, 1000);
  });
}
function saveOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("step3::saveOrder", order);
      resolve({ ret: "OK" });
    }, 1000);
  });
}

(async () => {
  try {
    // Step 1
    let order = await getOrder();
    // Step 2
    order.patient.city = "Buenos Aires";
    order = await updatePatient(order);
    console.log("order", order);
    // Step 3
    const result = await saveOrder(order);
    console.log("result", result);
  } catch (error) {
    console.error(error);
  }
})();
