let djk = async () => {
    try {
      let a = await fetch("https://world.openfoodfacts.org/api/v0/product/737628064502.json");
      if (!a.ok) {
        throw new Error("Failed to fetch data");
      }
  
      let b = await a.json();
      return b;
    } catch (error) {
      console.error(error);
    }
  };
  
  // Properly handling the Promise
  djk().then((data) => console.log(data)).catch((err) => console.error(err));
  