const dogLogoDataUrl = `data:image/png;base64,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`;
const twitterLogoDataUrl = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA0CAYAAAA62j4JAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS+SURBVHgB3VtfUtpgEN8vSV8rnKDpCWpPoN7AngCZAftYPYF4AutTp+KM9ATFE4gnkJ7AeAJiHytku7tJCAHyD5IQ+M0gId8X4m72/y4KKgzzbmTCPzgGTR0Awj4oML0lm15DUPiHzvetdn0AK0JBBWHejIhYdUWHh6kuQLDoz6V1Wu8lbTW7o0NQWsNq7TX5s7Z0wwZhdl8viPgnSEs8gyVDqTuzaz+I1Cz93tEhr9PmB3Ccx+DS2U0/6GJDPYOD59bX+ncoGebt6x0gnsA6YGl4h0fAajIWtTkGVA36XPPXrdPaR3+7EbrYgI68a+rKvP07slrvf0FJyIV4BkvDWCTIJzgMDc9DH0OLSMZmeuz0iAkNKAEi9nkQH6C2/DTZiVa9P3tmqgKkOzXi3GjhmoLVYap2hYOIb9c7ck+hldQDZlXAO7EAVofu657V3ruEIuCrXXGwmXi6T5+8ywlo2gGMkewC2GwLAgm4HbGx+B35NUr1QHcurWbdgpxQ0tO3vfdALTxDybQENsCJ0hv/ItLRN/WQq5vUM7i61VGDsE1gifjiP8hZIzhM/CqJxIgJZLGj/G0msIsqFzY9yCMKmKa0Bgx4x9FUSvjSwDq1DjT1AcoCi72Bn2eJl3/BPyCRsN2QMiX86OvGfl6ZEZMEtcsLCga+zs8vheMAhdkDn1lG5KUaeQMx0niHGWDA6v6eGcGqMVbPFHM/mT9HZ5LUVAHaNItcQCgUZjUgd3hN7vAbrId90m8hnpjhpq6Aj8SkIXkbi+2NqByns6BMKBpOtGovpMMSJb1RLK2iubZ9IP2PqBkspMPyZMhPQhBA7DSmDJB82bPm4irQSyl3AUYKFRDiyZqLK9TUgBTnXqJDtzJTjrsqCFa7Fln5CoygxlESBNYc1Ek1C2aZERvhBjZAp2BhF4H4ErccjgRhB5mg4mma8wJ4D7sGzMIAA3qwS+5PCqD1lDYAPDVQ2IRdgXizhC3zJ6RoqPAadgETJ1GlIx2d20QopWJTDObq/1HQohYoeDjaaklIIf6yLW6R1OGM/GgzU6GkKqACbpptqWM9CZV1SpMdqEaOHwfy/VardpRmqxG3OC11KZIADpPHVDHSFYfMh1BlUAUo7dZYBnhV4Avv2H0hVBsK+qS6g7TbY22AVyLbrsBIDzc/kxBvBN3iSDEtsSJAXitr50pL2kClJJaCAVQd7Kn07EXdRAYIDCmRJXeONgkK4VfpW6ZigKiCISWyPlQS0voewArIXPOh2mFHRk6qUjXO4POXIZ0KzECGDCbohsmbjhBF79fLXteu+kn3hzsvPMcH0lApp4A60+OHNZBZAuYhBYc3NpAyX7RVxDPWkgB31kajp45nsIXEM1ZiwEYIF1Av0YDjPMd0MjHAHTOdGzwsCxzlcXqe99dGLbhNUnF1+zJZhcjjLJvoEEmdcn6+Ly8oryXWIN0yg7MLg0WbAbtaHTpez6KYW/gHbu5PqW8VAhxuZuDq0V22W81ho4wokfDglhFwByd5jE0VPS/MKfe1/PAhoYlRBBK9gBjDCZXAUH658SmHmqAtozKIPLM/KPNpL0P2ZMgfNGZG6FIy41m/mhhODBlOC+Tpcg3RefHyhuEmnnIc/gNs5/u0FoEV2AAAAABJRU5ErkJggg==`;

function replaceLogoImages() {
  console.log("replaceLogoImages");
  const images = document.querySelectorAll("image");
  for (let img of images) {
    if (img.getAttribute("xlink:href") === dogLogoDataUrl) {
      img.setAttribute("xlink:href", twitterLogoDataUrl);
    }
  }
}

replaceLogoImages();
const observer = new MutationObserver(replaceLogoImages);
observer.observe(document.body, { childList: true, subtree: true });
