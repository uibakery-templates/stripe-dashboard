if ({{params?.filter}}) {
  return {{state.mockPayments.payments.filter(payment => payment.customer.email.includes(params.filter))}};
}
return {{state.mockPayments.payments}};