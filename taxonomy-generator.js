function TaxonomyGenerator() {

  var date = new Date()

  return {
    date,
    desc: '',
    title: 'Test Taxonomy ' + date,
    __links: [
      {
        organizationId: 1,
        taxonomyId: 1
      }
    ]
  }

}

export default TaxonomyGenerator
