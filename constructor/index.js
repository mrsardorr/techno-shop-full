const Category = require("../model/index");
const Product = require("../model/product");
const boxlist = []

module.exports.getMain = async function (req, res) {
  res.render("index", {
    title: "Home page",
    isHome: true,
  });
};

module.exports.getProducts = async function (req, res) {
  const productss = await Product.find(); 
  res.render("products", {
    productss,
  });
    console.log(productss);
};

module.exports.addProduct = async function (req, res) {
    res.render("add", {
    });
  };

module.exports.addProductFunc = async function (req, res) {
    // const products = req.body
    const product = new Product({
        name: req.body.Product,
        price: +req.body.Price,
        categoryId: req.body.ctgID
    })

    await product.save()
    res.redirect('/index/products/')
  };

  module.exports.remProductFunc = async function (req, res) {
    res.render("remove", {
    });
  };

module.exports.removeProductFunc = async function (req, res) {
    const iddd = req.body.ID
    await Product.findByIdAndRemove(iddd)
    res.redirect('/index/products/')
  };

  module.exports.upProductFunc = async function (req, res) {
    res.render("update", {
    });
  };

module.exports.updateProductFunc = async function (req, res) {
    const iddd = req.body.ID
    const newww = {
      name: req.body.name,
      price: req.body.price
    }
    await Product.findByIdAndUpdate(iddd,newww)
    res.redirect('/index/products/')
  };

  module.exports.getBOX = async function (req, res) {
  const productss = await Product.find(); 
  const idd = req.body.idd
  const idxx = productss.findIndex(prod=>prod._id = idd)
  const objj = productss.slice(idxx,idxx+1)

  boxlist.push(objj)
    res.render("box", {
      boxlist,
      productss
    });
  };

  module.exports.addToBox = async function (req, res) {
  const productss = await Product.find(); 
    const idd = req.body.idd
    // console.log(idd)
    const idxx = productss.findIndex(prod=>prod._id == idd)
    // console.log(idxx)
    const objj = productss.slice(idxx,idxx+1)
    // console.log(objj)
    // boxlist.push(objj)
    boxlist.push(boxlist)
    console.log(boxlist)

    res.redirect('/index/box/')

  };