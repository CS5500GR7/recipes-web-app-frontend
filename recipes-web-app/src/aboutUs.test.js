import AboutUs from "./components/AboutUs/index";
test("Test about-us ", () => {
    let aboutUS = "The Drink Masters is a destination where every cocktail enthusiast can explore our curated collection" +
        " of incredible cocktails and learn how to make them. Try a new spirit or put your own unique spin on one of the" +
        " hundreds of drinks you find. Discover the art of cocktails by learning a new technique “Behind the Bar,” " +
        "or just let the stunning, colorful drink images inspire your next big occasion or casual evening at home. " +
        "Search hundreds of recipes for every spirit type, from sweet Tequila to smoky Bourbon. There’s something " +
        "for everyone, from Margaritas to Martinis, party punches to seasonal favorites, old-fashioned classics to " +
        "the latest mixologist concoctions.";
    expect(AboutUs()['props']['children'][0]['props']['children']).toBe(aboutUS)
});
