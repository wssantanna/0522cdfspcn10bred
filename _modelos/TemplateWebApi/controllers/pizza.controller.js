
const PizzaModel = require('../models/pizza.model')

const PizzaController = {

    getAll: async function () {
        const [, res] = arguments;

        const pizzas = await PizzaModel.findAll();

        res
            .status(200)
            .json(pizzas);
    },

    getById: async function () {
        const [req, res] = arguments;

        const { id } = req.params;

        const pizzaFound = await PizzaModel.findByPk(id);

        if (pizzaFound) {
            res
                .status(200)
                .json(pizzaFound);
        }
        else {
            res.status(404);
        }
    },

    create: async function () {
        //
        const [req, res] = arguments;
        //
        const { id, name, description, size, flavor } = req.body;
        //
        const newPizza = await PizzaModel.create({ id, name, description, size, flavor });
        //
        if (newPizza) {
            res
                .status(201)
                .json(newPizza);
        }
        //
        else {
            res
                .status(400)
                .json({ message: "Não foi possível cadastrar a Pizza" });
        }
    },

    updateById: async function () {
        //
        const [req, res] = arguments;
        //
        const { id } = req.params;

        const pizzaFound = await PizzaModel.findByPk(id);
        //
        if (pizzaFound) {
            //
            pizzaFound.set(req.body);
            //
            const pizzaUpdated = await pizzaFound.save();
            //
            res
                .status(200)
                .json(pizzaUpdated);
        }
        else {
            res
                .status(404)
                .json({ message: 'Pizza não encontrada' })
        }
    },

    deleteById: async function (idPizza) {
        const [req, res] = arguments;
        //
        const { id } = req.params;
        //
        const pizzaFound = await PizzaModel.findByPk(id);

        //
        if (pizzaFound) {
            //
            pizzaFound.destroy();
            //
            res
                .status(200)
                .send(null);
        }
        else {
            //
            res
                .status(404)
                .json({ message: 'Pizza não encontrada' });
        }
    }
}

module.exports = PizzaController;