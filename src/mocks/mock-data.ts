// mock-data.ts
import { Album } from "./../app/models/album.model";

export const ALBUMS: Album[] = [
  {
    title: "GUTS",
    artists: "Olivia Rodrigo",
    musics: [{
      title: "vampire",
      artists: "Olivia Rodrigo",
      release: new Date(),
      duration: 219
    }],
    cover: "https://m.media-amazon.com/images/I/91rzIsvpwjL._AC_UF1000,1000_QL80_.jpg",
    release: new Date()
  },
  {
    title: "UTOPIA",
    artists: "Travis Scott",
    musics: [{
      title: "MY EYES",
      artists: "Travis Scott",
      release: new Date(),
      duration: 73
    }],
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMsEU2qPSRc2UzmC_sjJS2acb21yPNBoYaDNDr7RyQ6qG62fFO8R3nPS5oQYmr2p6eT4&usqp=CAU",
    release: new Date()
  },
  {
    title: "Flower Boy",
    artists: "Tyler, The Creator",
    musics: [{
      title: "MY EYES",
      artists: "Travis Scott",
      release: new Date(),
      duration: 73
    }],
    cover: "https://www.aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg#keepProtocol",
    release: new Date()
  },
];
