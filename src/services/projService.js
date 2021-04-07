 import { utilService } from './utilService.js';
 import {storageService} from './storageService.js'

const KEY='projDb'


export const projService = {
    query,
  

}
async function query(filterBy ={}) {
    let projFromStorage=storageService.load(KEY)
    if(!projFromStorage||!projFromStorage.lenth)
     projFromStorage=_createProjs()
     return Promise.resolve(projFromStorage)

}
 function _createProjs(){
     return [
         {id:utilService.makeId(),projName:'Sunday',title:'Project Management App',img:'sunday',frameworkImg:'react_huhqdp',hosting:'heroku',libs:['react','redux','mongoDb','node.js','cloudinary','scss','socket.io'],link:'https://sunday-2021.herokuapp.com/'},
         {id:utilService.makeId(),projName:'MissBook',title:'An online book shop',img:'book',frameworkImg:'vue_xwkiqo',hosting:'gitHub',libs:['vue','vuex','scss','axios','api'],link:'https://almog2139.github.io/miss-book-vueJs/'},
         {id:utilService.makeId(),projName:'MisterBitcoin',title:'A personal Bitcoin wallet',img:'misterBitcoin',frameworkImg:'angular_y3cjzj',hosting:'gitHub',libs:['angular','ngrx','scss','observable','ts'],link:'https://almog2139.github.io/mister-bitcoin/#/'},
         {id:utilService.makeId(),projName:'MemeGen',title:'A meme generator',img:'memegen',frameworkImg:'js_twtfgo',hosting:'gitHub',libs:['html5','vanilla-js','es6','css3'],link:'https://almog2139.github.io/memes/'},
         {id:utilService.makeId(),projName:'Minesweeper',title:'A Minesweeper game',img:'mine',frameworkImg:'js_twtfgo',hosting:'gitHub',libs:['html5','vanilla-js','es6','css3'],link:'https://almog2139.github.io/mine-sweeper3/'},
         {id:utilService.makeId(),projName:'WikiTube',title:'YouTube video search app',img:'wikitube',frameworkImg:'js_twtfgo',hosting:'gitHub',libs:['html5','vanilla-js','es6','css3','api'],link:'https://almog2139.github.io/wikiTube/'},
         {id:utilService.makeId(),projName:'Tic Tac Toe',title:'A tic tac toe game',img:'tic',frameworkImg:'react_huhqdp',hosting:'gitHub',libs:['react','es6','scss',],link:'https://almog2139.github.io/tic-tac-toe/'},
         {id:utilService.makeId(),projName:'Touch The Nums',title:'Touch the nums game',img:'nums',frameworkImg:'js_twtfgo',hosting:'gitHub',libs:['html5','vanilla-js','es6','css3'],link:'https://almog2139.github.io/Touch-The-Nums/'},
     ]

 }