(function createJSONFile() {
  const fs = require("fs");
  const jsonData = JSON.stringify({
    products: [
      {
        id: 1,
        name: "Caneta Bic Preta",
        price: 7.45,
      },
      {
        id: 2,
        name: "Borracha Branca",
        price: 3.45,
      },
    ],
  });

  fs.writeFile("db.json", jsonData, "utf8", (err) => {
    if (err) {
      console.error("Error creating JSON file:", err);
    } else {
      console.log("JSON file created successfully!");
    }
  });
})();
