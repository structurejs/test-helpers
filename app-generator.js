function AppGenerator() {

  var date = new Date()

  return {
    date_created: date,
    date_updated: date,
    title: 'Test App' + date
  }

}

export default AppGenerator
