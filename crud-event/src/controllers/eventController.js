const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM event', (err, eventos) => {
      if (err) {
        res.json(err);
      }
      console.log(eventos);
      res.render('eventos', {
        data: eventos
      });
    });
  });
};

controller.save = (req, res) =>{

  const data = req.body;
  console.log(req.body)

  req.getConnection((err, conn) => {
    const query = conn.query('INSERT INTO event set ?', [data], (err, eventos) => {
      console.log(evento)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM event WHERE id = ?', [id], (err, rows) => {
      res.render('event_edit', {
        data: rows[0]
      });

    });
  })
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newEvent = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE event set ? WHERE id = ?', [newEvent, id], (err, rows) => {
      re.redirect('/');
    });
  });
};

controller.delete = (req, res) =>{
  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM event WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  })
};



module.export = controller;
