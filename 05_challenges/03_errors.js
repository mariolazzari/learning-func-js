const currentInputValues = {
  firstName: "Shaun", // Must be at least 2 characters
  lastName: "", // Must be at least than 2 characters
  zipCode: "12345", // Must be exactly 5 characters
  state: "", // Must be exactly 2 characters
};

const inputCriteria = {
  firstName: [
    v => (v.length >= 2 ? "" : "First name must be at least 2 characters"),
  ],
  lastName: [
    v => (v.length >= 2 ? "" : "Last name must be at least 2 characters"),
  ],
  zipCode: [
    v => (v.length === 5 ? "" : "Zip must be exactly 5 characters long"),
  ],
  state: [
    v => (v.length === 2 ? "" : "State must be exactly 2 characters long"),
  ],
};

const getErrorMessages = (inputs, criteria) =>
  Object.keys(inputs)
    .reduce(
      (acc, key) => [
        ...acc,
        ...criteria[key].map(test => test(inputs[fieldName])),
      ],
      []
    )
    .filter(msg => msg !== "");

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
*/
