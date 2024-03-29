const books = [
  {
    title: "Eloquent JavaScript",
    img: "https://images-na.ssl-images-amazon.com/images/I/51I9naPg55L._SX218_BO1,204,203,200_QL40_.jpg",
    link: "https://eloquentjavascript.net/",
    description: 'A book providing an introduction to the JavaScript language and programming in general.'
  },
  {
    title: "You Dont Know JS",
    img: "https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/cover.jpg?raw=true",
    link: "https://github.com/getify/You-Dont-Know-JS",
    description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skill set'
  },
  {
    title: "Clean Code",
    img: "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX385_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/",
    description: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant reREADs are lost because of poorly written code. But it doesn’t have to be that way.'
  },
  {
    title: "The Software Craftsman",
    img: "https://images-na.ssl-images-amazon.com/images/I/51HApiVITLL._SX382_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/dp/0134052501/",
    description: 'Despite advanced tools and methodologies, software projects continue to fail. Why? Too many organizations still view software development as just another production line. Too many developers feel that way, too—and they behave accordingly.'
  },
  {
    title: "Cracking the Coding Interview",
    img: "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln%2BL._SX348_BO1, 204, 203, 200_.jpg",
    link: "https://www.youtube.com/playlist?list=PLX6IKgS15Ue02WDPRCmYKuZicQHit9kFt",
    description: 'Good or Bad many companies will base their hiring decisions on your ability to think on the spot. Check out this <a href="https://www.youtube.com/playlist?list=PLX6IKgS15Ue02WDPRCmYKuZicQHit9kFt" target="_blank">playlist by Gayle</a> before you start interviewing'
  },
  {
    title: "The Mythical Man-Month",
    img: "https://images-na.ssl-images-amazon.com/images/I/51WIpM70FEL._SX334_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959/",
    description: 'With a blend of software engineering facts and thought-provoking opinions, Fred Brooks offers insight for anyone managing complex projects.'
  },
  {
    title: "Design Patterns",
    img: "https://images-na.ssl-images-amazon.com/images/I/51kuc0iWoKL._SX326_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8/",
    description: 'Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves. These patterns have withstood the test of time. Follow <a href="https://www.youtube.com/playlist?list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc" target="_blank">Christopher Okhravi</a> in his video series as he explores the most common patterns seen in modern development.'
  },
  {
    title: "Game Programming Patterns",
    img: "https://m.media-amazon.com/images/I/51IRl5e5R9L.jpg",
    link: "https://www.amazon.com/Game-Programming-Patterns-Robert-Nystrom-ebook/dp/B00P5URD96/",
    description: 'The biggest challenge facing many game programmers is completing their game. Most game projects fizzle out, overwhelmed by the complexity of their own code. Game Programming Patterns tackles that exact problem. Based on years of experience in shipped AAA titles, this book collects proven patterns to untangle and optimize your game, organized as independent recipes so you can pick just the patterns you need.'
  },
  {
    title: "Head First JavaScript",
    img: "https://images-na.ssl-images-amazon.com/images/I/51qQTSKL2nL._SX430_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Head-First-JavaScript-Programming-Brain-Friendly/dp/144934013X",
    description: 'This brain-friendly guide teaches you everything from JavaScript language fundamentals to advanced topics, including objects, functions, and the browser’s document object model. You won’t just be reading—you’ll be playing games, solving puzzles, pondering mysteries, and interacting with JavaScript in ways you never imagined.'
  },
  {
    title: "Head First CSharp",
    img: "https://images-na.ssl-images-amazon.com/images/I/51nk9Pi074L._SX258_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Head-First-Learners-Real-World-Programming/dp/1491976705/",
    description: "Dive into CSharp and create apps, user interfaces, games, and more using this fun and highly visual introduction to CSharp, . NET Core, and Visual Studio. You'll learn how to use classes and object- oriented programming, create 3D games in Unity, and query data with LINQ And you'll do it all by solving puzzles, doing hands-on exercises, and building real-world applications."
  },
  {
    title: "Head First Design Patterns",
    img: "https://images-na.ssl-images-amazon.com/images/I/51d1hlegtQL._SX258_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Head-First-Design-Patterns-Object-Oriented-dp-149207800X/dp/149207800X/",
    description: "You know you don't want to reinvent the wheel, so you look to Design Patterns: the lessons learned by those who've faced the same software design problems. With Design Patterns, you get to take advantage of the best practices and experience of others so you can spend your time on something more challenging. Something more fun."
  },
  {
    title: "Code Complete 2",
    img: "https://images-na.ssl-images-amazon.com/images/I/41JOmGowq-L._SX408_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670",
    description: 'Capturing the body of knowledge available from research, academia, and everyday commercial practice, McConnell synthesizes the most effective techniques and must-know principles into clear, pragmatic guidance. No matter what your experience level, development environment, or project size, this book will inform and stimulate your thinking—and help you build the highest quality code.'
  },
  {
    title: "HTML and CSS",
    img: "https://images-na.ssl-images-amazon.com/images/I/41WznOEKmAL._SX396_BO1,204,203,200_.jpg",
    link: "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/",
    description: 'This beautifully designed manual explains how to use HTML in a concise readable format. This educational book is one that you will enjoy picking up, reading, then referring back to. It will make you wish other technical topics were presented in such a simple, attractive and engaging way!'
  }
]

function drawBooks() {
  const elem = document.getElementById('books');
  if (!elem) {
    return setTimeout(drawBooks, 100);
  }
  let template = ''
  books.forEach(book => {
    template += `
    <div class="book my-3">
      <div class="book">
        <div class="text-center">
          <img src="${book.img}" alt="${book.title}" height="250">
        </div>
        <div class="card-body">
          <a class="selectable btn text-primary" href="${book.link}" title="${book.title}">  
            <h3 class="text-primary darken-30 border-bottom">${book.title}</h3>
          </a>
          <p class="px-3">${book.description}</p>
        </div>
      </div>
    </div>
    `
  })
  elem.innerHTML = template
}

drawBooks()