import { useEffect } from "react";

const UTMTracker = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Website Name
    const website = "decl.ca";

    // Capture UTM Parameters
    const utmData = {
      website: website,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      fbclid: params.get("fbclid") || "",
    };

    // Store values in Local Storage
    Object.entries(utmData).forEach(([key, value]) => {
      localStorage.setItem(key, value);
    });

    // Create _fbc Cookie
    if (utmData.fbclid) {
      const fbc = `fb.1.${Date.now()}.${utmData.fbclid}`;

      document.cookie = `_fbc=${fbc}; path=/; max-age=7776000; SameSite=Lax`;

      console.log("_fbc Cookie Created:", fbc);
    }

    console.log("Website :", website);
    console.log("UTM Data :", utmData);

  }, []);

  return null;
};

export default UTMTracker;