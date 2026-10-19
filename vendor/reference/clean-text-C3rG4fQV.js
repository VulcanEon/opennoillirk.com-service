var e = /[<>]/g,
  t = /\s+/g,
  n = /[\p{Cc}؜​-‏‪-‮⁠⁦-⁩﻿]/gu;
function r(r) {
  return r.replace(e, ``).replace(t, ` `).replace(n, ``).replace(t, ` `).trim();
}
export { r as t };
