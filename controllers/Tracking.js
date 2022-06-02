import Tracking from "../models/trackingModel.js";

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
