import { experiances, ResponseDataExperiance } from "@/data/experiences";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDataExperiance | {message: string}>
){
    
    if (req.method === "GET") {
        const {slug} = req.query;
        const experianceId = Number(slug);
        const experience = experiances.find((exp) => exp.id === experianceId)
        if(experience){
            res.status(200).json(experience);
        } else {
            res.status(404).json({ message: "Experience not found" });
        }
    }else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
      }
}