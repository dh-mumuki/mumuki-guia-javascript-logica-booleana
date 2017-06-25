function cuotas(tarjeta) {
  switch(tarjeta) {
    case "visa":
      return 6;
    case "mastercard":
      return 2;
    default:
      return 1;
  }
}