import type { APIRoute, GetStaticPaths } from "astro";
import sharp from "sharp";
import { projects, type Project } from "../../../data/projects";

export const getStaticPaths = (() => projects.map((project) => ({
  params: { slug: project.slug }, props: { project },
}))) satisfies GetStaticPaths;

const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

export const GET: APIRoute = async ({ props }) => {
  const project = props.project as Project;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#161614"/>
    <rect width="8" height="630" fill="#ff568e"/>
    <g font-family="Arial, Helvetica, sans-serif">
      <text x="72" y="95" fill="#eaeae6" font-size="32" font-weight="700">Kevin Tim<tspan fill="#ff568e">.</tspan></text>
      <text x="72" y="184" fill="#ff568e" font-size="17" letter-spacing="3">PROJECT CASE STUDY</text>
      <text x="68" y="300" fill="#eaeae6" font-size="80" font-weight="700">${escapeXml(project.title)}</text>
      <text x="72" y="375" fill="#aaaaa2" font-size="27">${escapeXml(project.tags.join(" · "))}</text>
      <path d="M72 514H1128" stroke="#3d3d36"/>
      <text x="72" y="566" fill="#eaeae6" font-size="21">kevintim.com</text>
      <text x="1128" y="566" fill="#aaaaa2" font-size="20" text-anchor="end">SOFTWARE ENGINEER · TOKYO</text>
    </g>
  </svg>`;
  const image = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(image), { headers: { "Content-Type": "image/png" } });
};
