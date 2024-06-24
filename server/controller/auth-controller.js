const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("Welcome to the world best mern series using controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to the registration Page using controller");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
