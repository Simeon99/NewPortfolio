import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "public", "CV.pdf");

  console.log("File Path:", filePath); // Debugging log

  if (!fs.existsSync(filePath)) {
    console.error("File not found at:", filePath);
    return res.status(404).json({ error: "File not found" });
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=CV.pdf");

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
