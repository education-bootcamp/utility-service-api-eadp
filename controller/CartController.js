const CartSchema = require('../model/cartSchema');

const loadAllData = async (request,response) => {

    const page= parseInt(request.query.page) || 1;
    const size= parseInt(request.query.size) || 10;

    try{
        const totalCountData = await CartSchema.countDocuments();
        const totalPages = Math.ceil(totalCountData/size);

        const skip = (page-1) * size; // offset

        const data = await CartSchema.find({}).skip(skip).limit(size).exec();

        return response.status(200).json({
            dataList:data,
            count:totalCountData
        })

    }catch (e) {
        console.log(e);
        return response.status(500).json(e);
    }
}

module.exports={
    loadAllData
}
