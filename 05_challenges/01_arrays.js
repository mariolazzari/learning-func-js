const electionVotes = [
  "Harry",
  "Rick",
  "Ben",
  "Ben",
  "Harry",
  "Ashley",
  "Connor",
  "Rick",
  "Ashley",
  "Rick",
  "Albert",
  "Ben",
  "Michael",
  "Rick",
  "Albert",
  "Karen",
  "Harry",
  "Karen",
  "Donna",
  "Ashley",
  "Albert",
  "Harry",
  "Dane",
  "Dane",
  "Rick",
  "Donna",
  "Mortimer",
];

const tallyVotes = votes => {
  // Your code here
  const scores = {};
  votes.forEach(vote => {
    if (!scores[vote]) {
      scores[vote] = 0;
    }
    scores[vote] += 1;
  });

  return scores;
};

console.log(tallyVotes(electionVotes));

/* Expected Output (something like this):
    {
        Harry: <some number>
        Donna: <some number>
        Rick: <some number>
        ...
    }
*/

// const tallyVotes = votes =>
//   votes.reduce(
//     (acc, name) => ({
//       ...acc,
//       [name]: acc[name] ? acc[name] + 1 : 1,
//     }),
//     {}
//   );
