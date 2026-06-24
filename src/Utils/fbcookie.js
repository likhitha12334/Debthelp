// Create Facebook _fbc Cookie

export const createFBCCookie = (fbclid) => {

  if (!fbclid) return;

  const cookieValue = `fb.1.${Date.now()}.${fbclid}`;

  document.cookie =
    `_fbc=${cookieValue}; path=/; max-age=7776000; SameSite=Lax`;

};

// Read _fbc Cookie

export const getFBCCookie = () => {

  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("_fbc="));

  return cookie ? cookie.split("=")[1] : null;

};