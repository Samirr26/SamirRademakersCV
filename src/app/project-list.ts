export interface Project{
  title: string;
  description: string;
  skills: string[];
  pictures: string[]
}

export const Projects: Project[] = [
  {
    title: "Truck & Trace",
    description: "In my third year of university I did an internship at the company NewCold. NewCold uses trucks to transport their goods and they wanted me to develop a system which would help them track their trucks from the office. I developed a system which contained an app, an API an adapter and a database. The concept is as follows: the truck drivers install the app on a mobile phone that they take with them on the trip, the app is connected to the API and sends information about the trip (like coordinates) to the API with certain intervals. The API then sends the data to the database where this data is stored and can be used to track the trucks. The adapter takes care of other data sources which are on the same level as the app but which send their data in a different data-format. The adapter makes sure that all data which is sent to the API is all the same data-format.",
    skills: ["Android", "C#", "Microsoft Azure", "Cloud"],
    pictures:[ "https://cdn.discordapp.com/attachments/616314074547879938/980927555634876455/unknown.png",
    "https://cdn.discordapp.com/attachments/616314074547879938/980928170389811230/unknown.png"]
  },
  {
    title: "CV Website",
    description: "A website I developed to visualize my CV. It shows information about myself, the projects I am proud of, my skills and my contact details.",
    skills: ["Angular","HTML","CSS","Typescript"],
    pictures:[ "https://cdn.discordapp.com/attachments/616314074547879938/980939339318054952/unknown.png"]
  },
  {
    title: "Estelling The Card Game",
    description: "At the end of my first year in university I developed, together with a group, a card game for mobile phones. The game was meant for visitors of the Efteling, an amusement park in the Netherlands. The app was created to give the visitors a better experience in the park. With the game we developed, users can play a card game against fairytail characters from the Efteling. All they have to do is scan a code with their phone at certain place in the park. This will lead them into playing a card game on their phone against the corresponding character of the place where they scanned the code. Everytime you beat a new character for the first time, the game will give you a new card that u can use in your future games. This way you can try to get as many cards as you can. You can kinda compare it to Pokemon cards.",
    skills: ["Android"],
    pictures: ["https://cdn.discordapp.com/attachments/616314074547879938/980954232633057370/unknown.png",
    "https://cdn.discordapp.com/attachments/616314074547879938/981115645666148352/unknown.png","https://cdn.discordapp.com/attachments/616314074547879938/981115833214468126/unknown.png"]
  }
]
