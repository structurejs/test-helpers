function TemplateGenerator() {

  var date = new Date()

  return {
    date_created: date,
    date_updated: date,
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
    title: 'Test Template'
  }

}

export default TemplateGenerator
