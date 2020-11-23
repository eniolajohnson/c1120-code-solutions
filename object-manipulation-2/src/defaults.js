/* exported defaults */
function defaults(target, source) {
  if (JSON.stringify(target) == "{}") {
    Object.assign(target, source);
  } else {
    for (var name in target) {
      for (var name in source) {
        if (name in target === false) {
          target[name] = source[name];
        }
      }
    }
  }
  return target;
}
