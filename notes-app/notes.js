const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your notes...'
}

/**
 * Add notes to our notes.json file
 * 
 * @param {string} title 
 * @param {string} body 
 */
const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse('Note title taken'))
  }
}

/**
 * 
 * @param {string} title 
 */
const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => {
    return note.title !== title
  })

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found'))
  }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.inverse('Your notes'))

  notes.forEach(note => {
    console.log(note.title)
  })
}

/**
 * 
 * @param {string} title 
 */
const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(chalk.inverse(note.body))     
  } else {
    console.log(chalk.red.inverse('Note not found'))
  }
}

/**
 * 
 * @param {object} notes 
 */
const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes)
  fs.writeFileSync('notes.json', jsonData)
}


const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const jsonData = dataBuffer.toString()
    
    return JSON.parse(jsonData)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
}