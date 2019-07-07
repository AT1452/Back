import firebase from './components/Firestore'

const db = firebase.firestore();




export const storeProducts = [
  {
    id: 1,
    title: "Google Pixel - Black",
    img: "img/product-1.png",
    price: 10,
    company: "GOOGLE",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  },
  {
    id: 2,
    title: "Samsung S7",
    img: "img/product-2.png",
    price: 16,
    company: "SAMSUNG",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  },
  {
    id: 3,
    title: "HTC 10 - Black",
    img: "img/product-3.png",
    price: 8,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  },
  {
    id: 4,
    title: "HTC 10 - White",
    img: "img/product-4.png",
    price: 18,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  },
  {
    id: 5,
    title: "HTC Desire 626s",
    img: "img/product-5.png",
    price: 24,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  },
  {
    id: 6,
    title: "Vintage Iphone",
    img: "img/product-6.png",
    price: 17,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  },
  {
    id: 7,
    title: "Iphone 7",
    img: "img/product-7.png",
    price: 30,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  },
  {
    id: 8,
    title: "Smashed Iphone",
    img: "img/product-8.png",
    price: 2,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0,
    opps: {
      0: {
        name: "shirts",
        desc: "shirts w ur logo n stuff",
        price: "24"
      },
      1: {
        name: "stickers",
        desc: "stickers w ur logo n stuff",
        price: "10"
      },
      2: {
        name: "banners",
        desc: "banners w ur logo n stuff",
        price: "100"
      },
      3: {
        name: "cohost",
        desc: "hackathon w ur logo n stuff",
        price: "2000"
      }
    }
  }
];

export const detailProduct = {
  id: 1,
  title: "Google Pixel - Black",
  img: "https://images.pexels.com/photos/459793/pexels-photo-459793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  price: 10,
  company: "google",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0,
  opps: {
    0: {
      name: "shirts",
      desc: "shirts w ur logo n stuff",
      price: "24"
    },
    1: {
      name: "stickers",
      desc: "stickers w ur logo n stuff",
      price: "10"
    },
    2: {
      name: "banners",
      desc: "banners w ur logo n stuff",
      price: "100"
    },
    3: {
      name: "cohost",
      desc: "hackathon w ur logo n stuff",
      price: "2000"
    }
  }
};

export const eventList = [
  {
    "id": 1,
    "city": "Hoffman Estates",
    "date": "08/09/19",
    "contact": "hackSTL@stdl.org",
    "desc": "HackSTL is a fun oppurtunity for high schoolers of any grade from Schaumburg High School or Hoffman Estates High School to compete together for epic prizes.",
    "end time": {
      "seconds": 1565456400,
      "nanoseconds": 0
    },
    "hostname": "STL",
    "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    "name": "HackSTL",
    "opps": [
      {
        "id": 0,
        "desc": "This package includes a shoutout at the beginning and end of the hackathon along with distribution of whatever swag you desire, as well as 'Powered by Your Company' stickers all over the venue!",
        "name": "Premium Package",
        "usd": 500,
        "inCart": false
      },
      {
        "id": 1,
        "desc": "This package includes everything from the lower packages, plus shirts and stickers of your brand distributed throughout the hackathon, as well as your own booth in a prime location",
        "name": "Level 3 package",
        "usd": 100,
        "inCart": true
      },
      {
        "id": 2,
        "desc": "This package includes your name listed as a sponsor on our website and a few posters throughout the venue to get participants interested in your company!",
        "name": "Level 2 Package",
        "usd": 50,
        "inCart": true
      },
      {
        "id": 3,
        "desc": "This package includes your name listed as a sponsor on our website letting the world know that you support the community!",
        "name": "Starter Pack",
        "usd": 20,
        "inCart": true
      }
    ],
    "start time": {
      "seconds": 1565370000,
      "nanoseconds": 0
    },
    "state": "Illinois",
    "budget": 1000,
    "earned": 500
  },
  {
    "id": 4,
    "date": "06/10/29",
    "city": "Chicago",
    "contact": "windyhacks@gmail.com",
    "desc": "Windy City Hacks is Chicago's largest high school hackathon! Running from June 21st to 22nd, Windy City Hacks is an amazing event for people to learn, compete, and meet fellow programmers.",
    "end": {
      "seconds": 1561611600,
      "nanoseconds": 0
    },
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "hostname": "Hack Club",
    "name": "Windy City Hacks",
    "opps": [
      {
        "id": 0,
        "desc": "This package includes a shoutout at the beginning and end of the hackathon along with distribution of whatever swag you desire, as well as 'Powered by Your Company' stickers all over the venue!",
        "name": "Premium Package",
        "usd": 500,
        "inCart": false
      },
      {
        "id": 1,
        "desc": "This package includes everything from the lower packages, plus shirts and stickers of your brand distributed throughout the hackathon, as well as your own booth in a prime location",
        "name": "Level 3 package",
        "usd": 100,
        "inCart": true
      },
      {
        "id": 2,
        "desc": "This package includes your name listed as a sponsor on our website and a few posters throughout the venue to get participants interested in your company!",
        "name": "Level 2 Package",
        "usd": 50,
        "inCart": true
      },
      {
        "id": 3,
        "desc": "This package includes your name listed as a sponsor on our website letting the world know that you support the community!",
        "name": "Starter Pack",
        "usd": 20,
        "inCart": true
      }
    ],
    "start": {
      "seconds": 1560834000,
      "nanoseconds": 0
    },
    "state": "IL",

    "tags": [
      "tech"
    ],
    "venue-address": "Something Roselle Road",
    "budget": 2500,
    "earned": 750
  },
  {
    "id": 3,
    "date": "07/29/19",
    "city": "Palatine",
    "contact": "code211@d211.org",
    "desc": "Code211 is a hackathon split over two days, Friday night and all day Saturday. You'll group up with other students to make the coolest coding project you can. Have fun, and enjoy some free food!",
    "end time": {
      "seconds": 1561914000,
      "nanoseconds": 0
    },
    "hostname": "Fremd",
    "image": "https://images.unsplash.com/photo-1483817101829-339b08e8d83f",
    "name": "Code 211 Hackathon",
    "opps": [
      {
        "id": 0,
        "desc": "This package includes a shoutout at the beginning and end of the hackathon along with distribution of whatever swag you desire, as well as 'Powered by Your Company' stickers all over the venue!",
        "name": "Premium Package",
        "usd": 500,
        "inCart": false
      },
      {
        "id": 1,
        "desc": "This package includes everything from the lower packages, plus shirts and stickers of your brand distributed throughout the hackathon, as well as your own booth in a prime location",
        "name": "Level 3 package",
        "usd": 100,
        "inCart": true
      },
      {
        "id": 2,
        "desc": "This package includes your name listed as a sponsor on our website and a few posters throughout the venue to get participants interested in your company!",
        "name": "Level 2 Package",
        "usd": 50,
        "inCart": true
      },
      {
        "id": 3,
        "desc": "This package includes your name listed as a sponsor on our website letting the world know that you support the community!",
        "name": "Starter Pack",
        "usd": 20,
        "inCart": true
      }
    ],
    "start time": {
      "seconds": 1561827600,
      "nanoseconds": 0
    },
    "state": "Illinois",
    "venue": "William Fremd High School",
    "budget": 8000,
    "earned": 5000
  },
  {
    "id": 6,
    "date": "10/22/19",
    "States": "Illinois",
    "contact": "hack@hoffman.com",
    "city": "Hoffman Estates",
    "desc": "An amazing oppurtunity for students interested in computer science to come and learn computer science from professionals.",
    "end date": {
      "seconds": 1562518800,
      "nanoseconds": 0
    },
    "hostname": "Hoffman Estates Library",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "name": "HackHoffman",
    "opps": [
      {
        "id": 0,
        "desc": "This package includes a shoutout at the beginning and end of the hackathon along with distribution of whatever swag you desire, as well as 'Powered by Your Company' stickers all over the venue!",
        "name": "Premium Package",
        "usd": 500,
        "inCart": false
      },
      {
        "id": 1,
        "desc": "This package includes everything from the lower packages, plus shirts and stickers of your brand distributed throughout the hackathon, as well as your own booth in a prime location",
        "name": "Level 3 package",
        "usd": 100,
        "inCart": true
      },
      {
        "id": 2,
        "desc": "This package includes your name listed as a sponsor on our website and a few posters throughout the venue to get participants interested in your company!",
        "name": "Level 2 Package",
        "usd": 50,
        "inCart": true
      },
      {
        "id": 3,
        "desc": "This package includes your name listed as a sponsor on our website letting the world know that you support the community!",
        "name": "Starter Pack",
        "usd": 20,
        "inCart": true
      }
    ],
    "start time": {
      "seconds": 1562432400,
      "nanoseconds": 0
    },
    "budget": 500,
    "earned": 50
  }
];