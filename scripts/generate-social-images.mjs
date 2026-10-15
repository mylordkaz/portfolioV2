import fs from "node:fs/promises";
import sharp from "sharp";

// Text and existing vector artwork, rendered locally; no external image service.
const logo = await fs.readFile(new URL("../src/assets/logo.svg", import.meta.url));
const artwork = await sharp(logo).resize(500, 500).png().toBuffer();
await sharp(logo).resize(64, 64).flatten({ background: "#161614" }).png()
  .toFile(new URL("../public/favicon.png", import.meta.url).pathname);
const pages = {
  home: ["SOFTWARE ENGINEER · TOKYO, JAPAN", "Backend systems.", "Mobile apps. Web.", "Go · Python · TypeScript"],
  projects: ["SELECTED PROJECTS", "Ideas built into", "working software.", "Trakio · Voy Travel · Cryptrack · Business websites"],
  expertise: ["SOFTWARE DEVELOPMENT", "Useful systems.", "Thoughtful products.", "Backend · Internal tools · Mobile · Web"],
  about: ["ABOUT & CONTACT", "French engineer.", "Based in Tokyo.", "Backend · Mobile · AI · 508.dev"],
};
const output = new URL("../public/social/", import.meta.url);
await fs.mkdir(output, { recursive: true });
for (const [page, [eyebrow, lineOne, lineTwo, detail]] of Object.entries(pages)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#161614"/>
    <rect x="0" width="8" height="630" fill="#ff568e"/>
    <g font-family="Arial, Helvetica, sans-serif">
      <text x="72" y="95" fill="#eaeae6" font-size="32" font-weight="700">Kevin Tim<tspan fill="#ff568e">.</tspan></text>
      <text x="72" y="181" fill="#ff568e" font-size="17" letter-spacing="3">${eyebrow.replaceAll("&", "&amp;")}</text>
      <text x="68" y="283" fill="#eaeae6" font-size="68" font-weight="700">${lineOne}</text>
      <text x="68" y="367" fill="#eaeae6" font-size="68" font-weight="700">${lineTwo}</text>
      <text x="72" y="441" fill="#aaaaa2" font-size="22">${detail}</text>
      <path d="M72 514H1128" stroke="#3d3d36"/>
      <text x="72" y="566" fill="#eaeae6" font-size="21">kevintim.com</text>
      <text x="1128" y="566" fill="#aaaaa2" font-size="20" text-anchor="end">FR / EN / JP</text>
    </g>
  </svg>`;
  // Place the low-opacity mark behind the text layer.
  const faded = await sharp(artwork).ensureAlpha().linear([1, 1, 1, 0.09], [0, 0, 0, 0]).png().toBuffer();
  const background = await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#161614" } })
    .composite([{ input: faded, left: 670, top: 40 }]).png().toBuffer();
  const foreground = Buffer.from(svg.replace('<rect width="1200" height="630" fill="#161614"/>', ""));
  await sharp(background).composite([{ input: foreground }]).png({ compressionLevel: 9 }).toFile(new URL(`${page}.png`, output).pathname);
  console.log(`Generated social/${page}.png`);
}
