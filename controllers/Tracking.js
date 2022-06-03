import Tracking from "../models/trackingModel.js";
import Car from "../models/carModel.js";
import Plat from "../models/platModel.js";
import Armada from "../models/armadaModel.js";
import Driver from "../models/driverModel.js";

export const createTracking = async (req, res) => {
  const payload = {
    armada_id: req.body.armada_id,
    driver_id: req.body.driver_id,
    plat_id: req.body.plat_id,
    kendaraan_id: req.body.kendaraan_id,
    start_time: new Date(),
    finish_time: null,
  };
  Tracking.create(payload)
    .then((result) => {
      res.status(200).json({
        data: result.dataValues,
        message: "Tracking Created",
      });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

export const updateTracking = async (req, res) => {
  const payload = {
    finish_time: new Date(),
  };
  Tracking.update(payload, {
    where: {
      id: req.params.id,
    }
  })
    .then((result) => {
      res.status(200).json({
        message: "Tracking Updated",
      });
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

export const getAllTracking = async (req, res) => {

  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 10;

  let query = {}

  query.where = {}
  query.include = [{ model: Car }, { model: Plat }, { model: Armada }, { model: Driver }];
  query.attributes = { exclude: ["armada_id", "kendaraan_id", "plat_id", "driver_id"] };
  query.offset = (parseInt(currentPage) - 1) * parseInt(perPage);
  query.limit = parseInt(perPage);

  Tracking.findAndCountAll(query)
    .then(result => {
      res.status(200).json({
        message: 'Success get Data Tracking',
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

export const getTrackingById = async (req, res) => {
  try {
    let query = {}
    query.where = { id: req.params.id }
    query.include = [{ model: Car }, { model: Plat }, { model: Armada }, { model: Driver }];
    query.attributes = { exclude: ["armada_id", "kendaraan_id", "plat_id", "driver_id"] };

    const product = await Tracking.findAll(query);
    res.json(product[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
