const userService = require('./users.service')

const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const VALID_PROPERTIES = [
  "first_name",
  "last_name",
  "email",
  "company",
  "contact_name",
  "interested_in",
  "budget",
  "technologies",
  "description",
];

const hasRequiredProperties = hasProperties("first_name", "last_name", "interested_in");

function hasOnlyValidProperties(req, res, next) {
  const { data = {} } = req.body;

  const invalidFields = Object.keys(data).filter(
    (field) => !VALID_PROPERTIES.includes(field)
  );

  if (invalidFields.length)
    return next({
      status: 400,
      message: `Invalid field(s): ${invalidFields.join(", ")}`,
    });
  next();
}

async function create(req, res) {
  await userService.create(req.body.data);
  res.status(201).json({ message:"Record" });
}
async function list(res,res)
{
    const data = await userService.list()
    res.send(data)
}

async function read()
{
    const {userId} = req.params;
    res.json({data:await userService.read(userId)})
}

module.exports={
   list: asyncErrorBoundary(list), read:asyncErrorBoundary(read), create:[hasOnlyValidProperties,
    hasRequiredProperties,
    asyncErrorBoundary(create),]
}