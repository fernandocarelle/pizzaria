const pizzas = require('../database/Pizzas.json');
const path = require('path');
const fs = require('fs');

const indexController = {
  index: (req, res)=>{
      return res.render('index', {pizzas});
  },
  pizza: (req, res)=>{
    return res.render('pizza', {pizzas} )
  },
  create: (req, res)=>{
    return res.render('cadastroPizza')

  },
  store: (req, res)=>{
    /* return console.log(req.body); */
    let {nome, ingredientes, preco} = req.body

    let id = pizzas.length + 1;

    ingredientes = ingredientes.split(',');

    pizzas.push({
      id: id,
      nome: nome,
      ingredinetes: ingredientes,
      preco: preco,
      img: null,
      destaque: false
    })

    fs.writeFileSync(path.join('database', 'Pizzas.json' ), JSON.stringify(pizzas))

    res.redirect('/')
  }
}



module.exports = indexController;
