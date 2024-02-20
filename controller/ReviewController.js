const ReviewSchema = require('../model/ReviewSchema');

const loadAllReviews = async (request,response) => {

    const page= parseInt(request.query.page) || 1;
    const size= parseInt(request.query.size) || 10;

    try{
        const totalCountData = await ReviewSchema.countDocuments();
        const totalPages = Math.ceil(totalCountData/size);

        const skip = (page-1) * size; // offset

        const data = await ReviewSchema.find({}).skip(skip).limit(size).exec();

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
    loadAllReviews
}
