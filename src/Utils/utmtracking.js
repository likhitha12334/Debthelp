// Get all UTM Parameters from URL

export const getUTMParams = () => {

  const params = new URLSearchParams(window.location.search);

  const utmData = {

    utm_source: params.get("utm_source") || "",

    utm_medium: params.get("utm_medium") || "",

    utm_campaign: params.get("utm_campaign") || "",

    utm_term: params.get("utm_term") || "",

    utm_content: params.get("utm_content") || "",

    fbclid: params.get("fbclid") || ""

  };

  return utmData;

};

// Save UTM Parameters in Local Storage

export const saveUTMParams = () => {

  const utmData = getUTMParams();

  Object.entries(utmData).forEach(([key, value]) => {

    if (value) {

      localStorage.setItem(key, value);

    }

  });

  return utmData;

};