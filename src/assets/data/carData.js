// import all images from assets/images directory
import img01 from "../all-images/cars-img/Audi Q7.png";
import img02 from "../all-images/cars-img/BMW M4.png";
import img03 from "../all-images/cars-img/Honda Civic.png";
import img04 from "../all-images/cars-img/Innova Venturer.png";
import img05 from "../all-images/cars-img/Kia Carens.png";
import img06 from "../all-images/cars-img/Mahindra Thar.png";
import img07 from "../all-images/cars-img/Mercedes S450.png";
import img08 from "../all-images/cars-img/Tata Harrier.png";

const carData = [
  {
    id: 1,
    brand: "Audi",
    rating: 92,
    carName: "Audi Q7",
    imgUrl: img01,
    model: "Model 3.0",
    price: "25000"  ,
    speed: "Upto 200kmph",
    gps: "GPS Navigation",
    seatType: "7 seater",
    Bodystyle: "Sport Utility Vehicle",
    Cargovolume: "740 L",

    description:
      "The Audi Q7 is a crossover SUV made by the German manufacturer Audi, unveiled in September 2005 at the Frankfurt Motor Show. Production of this seven-seater SUV began in the autumn of 2005 at the Volkswagen Bratislava Plant in Bratislava, Slovakia.",
  },

  {
    id: 2,
    brand: "BMW",
    rating: 95,
    carName: "BMW M4",
    imgUrl: img02,
    model: "M4 COUPLE MODEL",
    price: "28000",
    speed: "Upto 220kmph",
    gps: "GPS Navigation",
    seatType: "5 seater",
    Bodystyle: "Coupe, convertible and four-door Gran Coupe body styles",
    Cargovolume: "520 L",

    description:
      "The BMW M4 is a high-performance version of the BMW 4 Series coupés and convertibles developed by BMW's motorsport division, BMW M, and marketed since 2014.",
  },

  {
    id: 3,
    brand: "Honda",
    rating: 89,
    carName: "Honda Civic",
    imgUrl: img03,
    model: "Model-2022",
    price: "20000",
    speed: "Upto 180kmph",
    gps: "GPS Navigation",
    seatType: "5 seater",
    Bodystyle: " sedan, coupe, five-door hatchback body styles",
    Cargovolume: "630 L",

    description:
      "The Honda Civic is a series of automobiles manufactured by Honda since 1972. As of 2023, the Civic is positioned between the Honda Fit/City and Honda Accord in Honda's global car line-up.",
  },

  {
    id: 4,
    brand: "Innova",
    rating: 90,
    carName: "Innova venturer",
    imgUrl: img04,
    model: "Model-2022",
    price: "22000",
    speed: "Upto 180kmph",
    gps: "GPS Navigation",
    seatType: "7 seater",
    Bodystyle: "  is a series of multi-purpose vehicles (MPV) manufactured by the Japanese carmaker body styles",
    Cargovolume: "780 L",

    description:
      "The Toyota Innova is a series of multi-purpose vehicles (MPV) manufactured by the Japanese carmaker Toyota since 2004, mainly sold with three-row seating.",
},

{
    id: 5,
    brand: "Kia",
    rating: 90,
    carName: "Kia carens",
    imgUrl: img05,
    model: "Model-2022",
    price: "22000",
    speed: "Upto 180kmph",
    gps: "GPS Navigation",
    seatType: "5 seater",
    Bodystyle: "Wagon",
    Cargovolume: "620 L",

    description:
      "The Kia Carens is hi-tech by design and inspiring by nature. It is futuristic sophistication clothed in bold and edgy armor with many class-leading features.",
  },

  {
    id: 6,
    brand: "Mahindra",
    rating: 83,
    carName: "Mahindra Thar",
    imgUrl: img06,
    model: "Model-2022",
    price: "15000",
    speed: "Upto 150kmph",
    gps: "GPS Navigation",
    seatType: "4 seater",
    Bodystyle: "Sport Utility Vehicle",
    Cargovolume: "550L",


    description:
      "The Mahindra Thar is a compact, four-wheel drive, off-road SUV manufactured by Indian automaker Mahindra and Mahindra Ltd.",
  },

  {
    id: 7,
    brand: "Mercedes",
    rating: 96,
    carName: "Mercedes S450 ",
    imgUrl: img07,
    model: "Model 3",
    price: "30000",
    speed: "Upto 220kmph",
    gps: "GPS Navigation",
    seatType: "5 seater",
    Bodystyle: "4-door sedan 1-door coupé",
    Cargovolume: "500L",

    description:
      "Mercedes-Benz S-Class S 450 4MATIC is the top model in the Mercedes-Benz S-Class lineup. It gives a mileage of 12.82 kmpl. Mercedes-Benz S-Class S 450 4MATIC is available in Automatic (TC) transmission.",
  },

  {
    id: 8,
    brand: "Tata",
    rating: 90,
    carName: "Tata Harrier",
    imgUrl: img08,
    model: "Model 3",
    price: "22000",
    speed: "Upto 180kmph",
    gps: "GPS Navigation",
    seatType: "5 seater",
    Bodystyle: "Sport Utility Vehicle",
    Cargovolume: "650 L",


    description:
      "The Tata Harrier is a mid-size SUV (Sports Utility Vehicle) manufactured by Tata Motors, an Indian automotive company. The Harrier was first introduced in 2019 and has gained attention for its modern design, features, and competitive pricing.",
  },
];

export default carData;
