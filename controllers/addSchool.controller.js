exports.addSchool = ({ name, address, latitude, longitude }, db, res) => {
    // empty fields
    if (!name || !address || !latitude || !longitude) {
      console.log("Error: All fields are required");
      res.status(400).send({ message: "Error: All fields are required" });
      return;
    }
  
  //either langitude and latitude is not a number
    if (typeof longitude !== "number" || typeof latitude !== "number") {
        res.status(400).send({ message: "please enter a float value in longitude and latitude" });
      return;
    }
  
  //name and address must be string 
    if (typeof name !== "string" || typeof address !== "string") {
       res.status(400).send({ message: "The type of name and address must be string" });
      return;
    }
  
    //Insert a name of scool between 2-25
    if (name.length < 2 || name.length > 25) {
      res.status(400).send({message:"Name must be atleast 2 characters and maximum 25 characters"})
      return;
    }
  
    //Insert a name of scool between 2-100
    if (address.length < 2 || address.length > 100) {
      res.status(400).send({message:"Address must be atleast 2 characters and maximum 100 characters"})
      return;
    }
  
    if (latitude < -90 || latitude > 90) {
      res.status(400).send({message:'please enter a value between -90 and 90'})
      return;
    }
    if (longitude < -180 || longitude > 180) {
      res.status(400).send({message:'please enter a value between -180 and 180'})
    return;
    }
  
    
    const query = `INSERT INTO schools SET ? `;
    const school = { name, address, latitude, longitude };
    db.query(query, school, (error, results) => {
      if (error) {
        console.log("error in adding school", error);
        res.status(500).send({ message: "Error adding school" });
      } else {
        console.log("School added:", school.name, school.address, school.latitude, school.longitude);
        console.log("Query results:", results);
        res.send({ message: "School added successfully" });
      }
    });
  };
  