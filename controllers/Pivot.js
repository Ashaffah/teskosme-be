import Pivot from "../models/pivotModel.js";
import Car from "../models/carModel.js";
import Plat from "../models/platModel.js";
import Armada from "../models/armadaModel.js";

export const getAllPivot = async (req, res) => {

  const car = req.query.car;

  let query = {}
  if (car != undefined) {
    query.where = [
      { kode_id: JSON.parse(car) },
    ];
  }
  query.include = [{ model: Car }, { model: Plat }, { model: Armada }];
  query.attributes = { exclude: ["armada_id", "kode_id", "plat_id"] };

  Pivot.findAndCountAll(query)
    .then(result => {
      res.status(200).json({
        message: 'Success get Data Pivot',
        data: result.rows,
        total_data: result.count,
      })
    })
    .catch(err => {
      console.log(err);
      next(err);
    })
};

export const getPivotById = async (req, res) => {
  try {
    const product = await Pivot.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
