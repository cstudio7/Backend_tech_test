import Events from '../../models/events';

export const getEvents = async (req, res) => {

  //set Pagination Parameters
  const total = await Events.countDocuments({})
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  let currentPage = page ? +page : 0;
  const skipIndex = (page - 1) * limit;
  const totalPages = Math.ceil(total / limit);
  if (currentPage > totalPages) currentPage = totalPages;
  let prevPage = currentPage === 1 ? 1 : currentPage - 1;
  if (prevPage === -1) prevPage = 0;
  const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;

  const getAllEvent = await Events.find()
      .sort({ date: -1 })
      .limit(limit)
      .skip(skipIndex)

  return res.status(200).json({
    event: getAllEvent,
    meta: {
      totalItem: total,
      totalPages,
      currentPage,
      prevPage,
      nextPage,
      perPage: limit
    }
  });
};

export const getEventByCategory = async (req,res) => {
  try{
    if(!req.query.category){
      return getEvents()
    }

    //set Pagination Parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    const event = await Events.find({category:req.query.category})
        .sort({ date: -1 })
        .limit(limit)
        .skip(skipIndex)

    if(event){
      return res.status(200).send({
        event: event
      })
    }

    return res.status(404).send('not found')
  }catch(e){
    console.log(e.message)
  }
}
