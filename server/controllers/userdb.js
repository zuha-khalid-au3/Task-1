const UserDb = require('../models/product');
const slugify = require('slugify');



exports.create=async(req,res)=>{
    console.log(req.body);
    try{
        //console.log(req.body);
        req.body.slug= slugify(req.body.name);
        const newProduct= await new UserDb(req.body).save();
        res.json(newProduct);
    }catch (err) {
        console.log(err);
       
        res.status(400).json({err:err.message,})
    }
};

exports.listAll=async (req,res) =>{
    //console.log("Inside")
     let products= await UserDb.find({})
    .limit(parseInt(req.params.count))
    .populate('category')
    .populate('subs')
    .sort([['createdAt','desc']])
    .exec();
     res.json(products);
    };


exports.remove = async (req, res) => {
    try{
        const deleted= await UserDb.findOneAndRemove({
            slug:req.params.slug,
        }).exec();
        res.json(deleted);
    }catch(err){
        console.log(err);
        return res.status(400).send("Product deletion failed")
    }
}


exports.read= async (req, res) => {
    const product =await UserDb.findOne({slug: req.params.slug})
    .populate('category')
    .populate('subs')
    .exec();
    res.json(product);
};


exports.update = async (req, res) => {
    try{
        if(req.body.title){
            req.body.slug= slugify(req.body.title);
        }
        const updated =await UserDb.findOneAndUpdate({slug: req.body.slug},
            req.body,
            {new:true})
            .exec();
            res.json(updated);
    }catch(err){
         res.status(400).json({err:err.message,})
    }
};


exports.list= async (req, res) => {
    try{
      const {sort,order,page} = req.body;
      const currentPage =page ||1;
      const perPage =3
      const products= await UserDb.find({})
      .skip((currentPage-1)*perPage)
      .populate('category')
      .populate('subs')
      .sort([[sort,order]])
      .limit(perPage)
      .exec();
      res.json(products);  
    }
    catch(err){
        console.log(err);
    }
}




exports.productsCount= async (req, res) => {
    let total =await UserDb.find({}).estimatedDocumentCount().exec();
    res.json(total);

}
