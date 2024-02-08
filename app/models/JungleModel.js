import { generateId } from "../utils/GenerateId.js";


export class Jumble {
    constructor( data) {
      this.id = generateId()
      this.name = data.name
      this.body = data.body
      // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
      this.fastestTime = null
      this.startTime = null
      this.endTime = null
    }
  
      get ListTemplate() { // a basic list template to get drawing
          return `<li>${this.name}</li>`
      }

      get ListHTMLTemplate() {
        return`
        <div class="card mt-2">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h2>Easy jumble</h2>
          <h2>Fastest time</h2>
        </div>
        <div class="card-body">
          <p class="card-text">Your additional line of text goes here.</p>
        </div>
    </div>
        `
      }

      get JumbleHTMLTemplate() {
        return`
        <div class="row justify-content-center">
        <div class="col-6 d-flex justify-content-center">
            <div class="card">
                <div class="card-header">
                <h3>Jumble!</h3>
                </div>
                <div class="card-body">
                    <ul class="list-inline mb-0">
                        <button class="btn btn-primary m-3">Start</button>
                        <li class="list-inline-item">${this.name}</li>
                        <li class="list-inline-item">${this.fastestTime}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
      }
  }