function anotherInsecurePassword() {
  // Use a cryptographically secure random suffix instead of Math.random()
  var suffix = window.crypto.getRandomValues(new Uint32Array(1))[0] * Math.pow(2, -32);
  var password = "sssAAAA" + suffix;
  return password;
}