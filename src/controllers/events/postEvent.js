import Events from '../../models/events';

export const postEvents = async (req, res) => {
  const {
    title,
    description,
    category,
    date,
    isVirtual,
    address,
  } = req.body;
  try {
    // create new events
    const newEvent = await Events.create({
      title,
      description,
      category,
      date,
      isVirtual,
      address,
    });

    // send a success message to the client
    return res.status(200).json({
      message: 'You have successfully created an event.',
      success: true,
    });
  } catch (error) {
    // watch errors
    console.error(error);
  }
};


