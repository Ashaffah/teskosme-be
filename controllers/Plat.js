import Plat from "../models/platModel.js";

export const getAllPlat = async (req, res) => {

  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;

  let query = {}

  query.where = {}
  query.offset = (parseInt(currentPage) - 1) * parseInt(perPage);
  query.limit = parseInt(perPage);

  Plat.findAndCountAll(query)
    .then(result => {
      res.status(200).json({
        message: 'Success get Data Plat',
        data: result.rows,
        total_data: result.count,
        per_page: parseInt(perPage),
        current_page: parseInt(currentPage),
      })
    })
    .catch(err => {
      console.log(err);
      next(err);
    })
};

export const getPlatById = async (req, res) => {
  try {
    const product = await Plat.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
