function TemplateGenerator() {

  var date = new Date()

  return {
    fields: [
      {
        title: 'Field 01',
        type: 'text-input'
      },
      {
        title: 'Field 02',
        type: 'text-area'
      },
    ],
    title: 'Test Template' + date
  }

}

export default TemplateGenerator
