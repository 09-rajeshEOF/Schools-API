const calculateDistance = require('../utils/calculateDistance');

exports.listSchools = (req, res, db) => {
  const { latitude, longitude } = req.query;

  // Validate user's coordinates
  if (!latitude || !longitude) {
    console.log("Error: User's coordinates are required");
    res.status(400).send({ message: "Error: User's coordinates are required" });
    return;
  }

  // Fetch all schools from the database
  db.query("SELECT * FROM schools", (error, schools) => {
    if (error) {
      console.log("Error fetching schools", error);
      res.status(500).send({ message: "Error fetching schools" });
      return;
    }

    // Calculate and sort by distance
    schools.sort((a, b) => {
      const distanceA = calculateDistance(latitude, longitude, a.latitude, a.longitude);
      const distanceB = calculateDistance(latitude, longitude, b.latitude, b.longitude);
      return distanceA - distanceB;
    });

    res.send(schools);
  });
};

