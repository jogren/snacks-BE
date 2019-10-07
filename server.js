const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Snacks BE';
app.locals.snacks = [
  { id: 1, name: 'Doritos', type: 'chips'  },
  { id: 2, name: 'Snickers', type: 'candy' },
  { id: 3, name: 'Coca-Cola', type: 'soda' }
]

app.get('/', (req, res) => {
  res.send('This is your Snacks BE');
});

app.get('/api/v1/snacks', (req, res) => {
  const snacks = app.locals.snacks;

  return res.json({ snacks })
});

app.get('/api/v1/snacks/:id', (req, res) => {
  const { id } = req.params;
  const snack = app.locals.snacks.find(snack => snack.id == id);

  if(snack) {
    return res.status(200).json(snack)
  } else {
    return res.sendStatus(404)
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

