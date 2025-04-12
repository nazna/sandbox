import ollama from 'ollama';

const models = {
  phi4: 'phi4:latest', // 48sec
  deepseek: 'deepseek-r1:7b', // 23sec
};

const prompt = `
Can you recommend 5 restaurants near Tokyo station?
The number of people is only one person, myself, and I am in the mood for ramen.
Please suggest a restaurant that can be opened around midnight.
Please also provide the URL of a website where we can see the menu, if available.
`;

const { message } = await ollama.chat({
  model: models.deepseek,
  messages: [{ role: 'user', content: prompt }],
});

console.log(message.content);
