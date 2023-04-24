# MVC - A Software Architectural Pattern

Learning how to use a Software Architectural Design Pattern is an essential skill for building well-structured and maintainable applications. Perhaps one of the most commonly used and well known patters is the Model-View-Controller (MVC) design pattern. While there are several approaches and code implementations for building out applications; and many developers will tell you `why` their framework, pattern, or approach is the "*One true path to salvation, and all others should perish into the fiery depths of hell*", pretty much every one of these **"Advanced Approaches"** are built right on top of the same reusable principles which we will discuss further, however the single most important thing to remember about learning any Software Architecture pattern is the true purpose **organization**. We want to write predictable and maintainable code that can scale up smoothly and leave room for future expansion without the fear of breaking legacy features. If the pattern doesn't accommodate this primary simple rule then it is absolutely worth of being tossed into the furnaces 🔥...

## Starting Simple

To keep start simple the **MVC** design pattern defines in its name three distinct pieces of an application. 

* **Model:** The Model handles data representation
* **View:** The View handles data visualization
* **Controller:** The Controller handles `User Input` and updates the `View` based on changes in the `Model` (🧠 *brains of the operation*)

__KittenDataStateModel.js__
```js
export class KittenDataStateModel {
  constructor() {
    this.kittens = [];
  }

  addKitten(kitten) {
    this.kittens.push(kitten);
  }
}
```

__KittensView.js__
```html
<div class="kittens-container" id="kittens-container">
  <div id="add-kitten">
    <input id="kitten-name"/>
    <button id="add-kitten">Add 🐈</button>
  </div>
  <div id="kittens">
    <!-- 😽 -->
  </div>
</div>
```

__Controller.js__
```js
import { KittenDataStateModel } from "./KittenDataStateModel.js";
import { KittensView } from "./KittensView.js";

export class KittensController {
  constructor() {
    this.kittenDataStateModel = new KittenDataStateModel();
    this.container = document.getElementById("kittens");
    this.handleAddClick();
    this.drawKittens(this.kittenDataStateModel.data)
  }

  drawKittens(kittens) {
    this.container.innerHTML = "";
    kittens.forEach((kitten) => {
      const div = document.createElement("div");
      div.textContent = kitten;
      this.container.appendChild(div);
    });
  }

  handleAddClick() {
    document.getElementById("add-kitten").addEventListener("click", () => {
      const inputValue = document.getElementById("kitten-name").value;
      this.kittenDataStateModel.addData(inputValue);
      this.kittensView.displayData(this.kittenDataStateModel.data);
    });
  }
}
```

Most patterns strive to stay simplistic in `concept` but can often become incredibly difficult when it comes to `implementation`. For a small simple application that only needs 1 model, 1 controller and 1 view, this pattern is perfect and would not need any additional organization or complications to make the system work. When it comes time to scale the project even MVC if built poorly from initial concepts will often fall flat on it's face without a bit more depth than the simple explanation above. 

## Leveling Up ⬆️ 🕶️

While MVC is absolutely wonderful remember that it is not all inclusive one solution for every problem, there are worthy variations and expansions, and even complete deviations to this pattern. That being said we are going to expand on the simple example above and include a few common Design Patterns to help build up our `MVC` approach to include a complete Application Design System.

* **Application State:** Single source of truth for all data in the application
* **Observer Pattern:** Doing something when an `Event` is triggered 
* **Services:** Let's isolate your business logic from the rest of the application 🪄

With These additions to `MVC` it is now much easier to start implementing the pattern in a scalable fashion. In the example the larger the application grows the harder it could become to keep everything straight. One of the glaring implementation problems we could face with this over simplified approach is a lack of separation of concerns. 

**A Data Problem**
Storing all of the kittens directly within the model can lead to fractured isolated pockets of data especially if we introduce another type of data or another model say puppies 🐶, or worse owners 👩‍👧‍👦. Imagine trying to create a relationship between data stored across multiple files all trapped within the isolated scope of their individual model files. This problem compounds when you have multiple actors all needing access to the same data... You cannot keep instantiating `new KittenDataStateModel` and expect the data to be the same unless you implement something like [the singleton pattern](https://en.wikipedia.org/wiki/Singleton_pattern).... *Which doing so would de-purpose the entire concept of building a model in the first place...*  So, a solution with the **Application State** and we get the added benefit to let models stay models.

**The Data Solution: Application State**
With this solution we will create (`a single instance`) (`observable`) (`proxy object`) <kbd>*3 big concepts that need further explanation later*</kbd> that all other member of the MVC pattern can use freely as needed. The `AppState` will hold all of the data for the entire application. 






These things are not included directly into `MVC` because there are several different approaches and opinions once again on how to accomplish anything in the developer world. (*Despite how it can feel like everyone hates everyone's ideas by and large most of these systems are in reality small tweaks on the underlying base systems so don't fret to much*).