const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});

  await User.deleteMany({});

  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    const thoughts = getRandomThoughts(20);

    const userName = getRandomName();
    const first = userName.split(' ')[0];
    const last = userName.split(' ')[1];

    students.push({
      first,
      last,
      thoughts,
    });
  }

  await User.collection.insertMany(students);

  await Thought.collection.insertOne({
    thoughtName: 'I stepped in something...',
    isThought: true,
    users: [...users],
  });

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
