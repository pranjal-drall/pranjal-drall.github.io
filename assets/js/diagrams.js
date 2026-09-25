// Optional libraries are enabled per page in its YAML front matter.
// DOMContentLoaded waits for the deferred Plotly script as well as this module.
document.addEventListener("DOMContentLoaded", async () => {
  if (window.Plotly) {
    document.querySelectorAll("pre > code.language-plotly").forEach((code) => {
      const chart = JSON.parse(code.textContent);
      const container = document.createElement("div");
      code.parentElement.after(container);
      window.Plotly.newPlot(container, chart.data, chart.layout || {}, { responsive: true });
      code.parentElement.hidden = true;
    });
  }

  const mermaidBlocks = document.querySelectorAll("code.language-mermaid");
  if (mermaidBlocks.length) {
    const { default: mermaid } = await import("https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs");
    mermaid.initialize({ startOnLoad: false, theme: "default" });
    await mermaid.run({ nodes: mermaidBlocks });
  }
});
