import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


function _drawjumbles() {
    const jumbles = AppState.jumbles
    let htmlString = ''
    jumbles.forEach(jumble => htmlString += jumble.JumbleHTMLTemplate)
    setHTML('jumblesList', htmlString)
}

export class JumblesController {
    constructor() {

    }
}