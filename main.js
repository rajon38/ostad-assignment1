import { listOfCountries } from "./mycountry.js";

listOfCountries.map((item) => {
    let details = `My Country name is ${item.name}`+`, `+`Country code is ${item.code}`;
    console.log(details);
}
)