
const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')


//customize yargs Version
yargs.version('1.1.0')


yargs.command({
  command:'add',
  describe: 'Add a new note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body:{
      describe: 'body',
      demandOption: true,
      type: 'string'
    }
  },

  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command:'remove',
  describe: 'Remove a new note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },

  },


  handler(argv) {
    notes.removeNote(argv.title)
  }
})


yargs.command({
  command:'read',
  describe: 'Read a note',
  builder:{
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})


yargs.command({
  command:'list',
  describe: 'list a note',



  handler(argv) {
    notes.listNote(argv.title)
  }
})

yargs.parse()


// const add = require('./utils.js')
//
// const sum = add(4, -2)
// console.log(sum);
