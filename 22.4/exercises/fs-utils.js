const fs = require('fs/promises');

function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

app.post(
  '/simpsons',
  async (req, res) => {
    try {
      const { id, name } = req.body;

      const simpsons = await getSimpsons();

      if (simpsons.map(({ id }) => id).includes(id)) {
        // não esqueça de adicionar o return para impedir de que seu código continue.
        return res.status(409).json({ message: 'id already exists' });
      }

      simpsons.push({ id, name });

      await setSimpsons(simpsons);

      return res.status(204).end();
    } catch (error) {
      return res.status(500).end();
    }
  }
);

module.exports = { getSimpsons, setSimpsons };