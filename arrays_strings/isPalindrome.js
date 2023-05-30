function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("asdasd"));
