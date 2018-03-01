const express = require('express');
const router = express.Router();

const sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

const ratesList = [
    {
        id: 1,
        fromStockName: 'Binance',
        fromStockTokenName: 'BTCUSDT',
        fromRateToken: 10500,
        toStockName: 'Yobit',
        toStockTokenName: 'BTCUSD',
        toRateToken: 10800,
    },
    {
        id: 2,
        fromStockName: 'Binance',
        fromStockTokenName: 'ETHUSDT',
        fromRateToken: 863,
        toStockName: 'Yobit',
        toStockTokenName: 'ETHUSDT',
        toRateToken: 920,
    },
    {
        id: 3,
        fromStockName: 'Binance',
        fromStockTokenName: 'ETHUSDT',
        fromRateToken: 863,
        toStockName: 'Yobit',
        toStockTokenName: 'ETHUSDT',
        toRateToken: 920,
    },
    {
        id: 4,
        fromStockName: 'Binance',
        fromStockTokenName: 'ETHUSDT',
        fromRateToken: 863,
        toStockName: 'Yobit',
        toStockTokenName: 'ETHUSDT',
        toRateToken: 920,
    },
    {
        id: 5,
        fromStockName: 'Binance',
        fromStockTokenName: 'ETHUSDT',
        fromRateToken: 863,
        toStockName: 'Yobit',
        toStockTokenName: 'ETHUSDT',
        toRateToken: 920,
    },
    {
        id: 6,
        fromStockName: 'Binance',
        fromStockTokenName: 'ETHUSDT',
        fromRateToken: 863,
        toStockName: 'Yobit',
        toStockTokenName: 'ETHUSDT',
        toRateToken: 920,
    }
];

router.get('/', function(req, res){
    if(req.params){
      /*Project
        .find({}, "title", function(err, project){*/
          /*if(err) {
            res.send(err);
          } else {*/
            
            res.json(ratesList);
          
            /*}*/
    /*);*/
        /*sendJSONresponse(res, 200, {
            "message": "All ok"
          });*/
    } else {
      sendJSONresponse(res, 404, {
        "message": "No rates in request"
      });
    }
  });

module.exports = router;