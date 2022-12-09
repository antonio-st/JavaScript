const feast = (beast, dish) => 
beast[0] + beast.slice(-1) === dish[0] + dish.slice(-1);

console.log(feast("great blue heron", "garlic naan"));