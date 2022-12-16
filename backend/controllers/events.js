import {
  EventModel
} from '../models/events.js'
import {
  CategoryModel
} from '../models/categories.js'

// get all events and replace id_category by category name
export const getAllEvents = async (req, res) => {
  const events = await EventModel.findAll({
  });

  console.log(events)

  const events2 = await Promise.all(events.map(async (event) => {
    if (event.id_category !== undefined && event.id_category !== null) {
      // verify if id_category is not null
      const category = await CategoryModel.findOne({
        where: {
          id_category: event.id_category
        },
        attributes: {
          exclude: ['id_category']
        }
      });

      if (category !== null) {
        // verify if category exists
        return {
          ...event.dataValues,
          category: category.name
        }
      }
    }
  }));

  return res.status(200).json({
    events: events2
  });
}


// create new event
export const createEvent = async (req, res) => {
  const {
    id_category,
    name,
    description,
    dateStart,
    dateEnd,
    value,
    location,
    image
  } = req.body

  if (dateEnd < dateStart) {
    return res.status(400).json({
      message: 'DateEnd must be greater than DateStart'
    })
  }

  const category = await CategoryModel.findOne({
    where: {
      id_category: id_category
    }
  })


  if (!category) {
    return res.status(404).json({
      message: 'Category not found'
    })
  }

  if (value < 0) {
    return res.status(400).json({
      message: 'Value must be greater or equal than 0'
    })
  }

  await EventModel.create({
    id_category: id_category,
    name: name,
    description: description,
    dateStart: dateStart,
    dateEnd: dateEnd,
    value: value,
    location: location,
    image: image
  })

  return res.status(201).json({
    message: 'Event created'
  })
}