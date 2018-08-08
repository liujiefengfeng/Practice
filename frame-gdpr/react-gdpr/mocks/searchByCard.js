module.exports = {
  path: '/infos/:cardNumber',
  template: {
    cardNumber: params => String(params.cardNumber),
    name: 'fengfeng',
    email: 'fengfeng.awesome@gmail.com',
    customer: {
      customerId: '001000',
      customerName: 'ThoughtWorks',
      customerAddress: {
        country: 'German',
        city: 'Hamburg',
        streetAndNumber: 'Großer Burstah 46',
        zipCode: '20457'
      }
    },
    employees: [
      {
        employeeId:'001001',
        employeeName: 'amber awesome',
        employeeEmail: 'aawesome@gmail.com'
      },
      {
        employeeId:'001002',
        employeeName: 'aisha first',
        employeeEmail: 'afirst@gmail.com'
      }
    ]
  }
};