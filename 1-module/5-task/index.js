function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let result = str.slice(0, maxlength - 1) + "…";
    return result;
  } else {
    return str;
  }
}