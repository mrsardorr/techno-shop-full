const { Router } = require("express");
const router = Router();
const constructor = require("../constructor/index");

router.get("/", constructor.getMain);

router.get("/products", constructor.getProducts);

router.get("/add", constructor.addProduct);

router.post("/add/product", constructor.addProductFunc);

router.get("/delete", constructor.remProductFunc);

router.post("/delete/product", constructor.removeProductFunc);

router.get("/update", constructor.upProductFunc);

router.post("/update/product", constructor.updateProductFunc);

router.get("/box", constructor.getBOX);

router.post("/addToBox", constructor.addToBox);




module.exports = router;
//b4r3b9U3NfHZ7i5
