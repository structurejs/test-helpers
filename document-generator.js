function DocumentGenerator() {

  var date = new Date()

  return {
    fields: [],
    title: 'Test Document' + date
  }

}

export default DocumentGenerator
