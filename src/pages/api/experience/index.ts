import { experiances, ResponseDataExperiance } from '@/data/experiences';
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
    req: NextApiRequest,
  res: NextApiResponse<ResponseDataExperiance[] | {message: string}>
){  
    if(req.method ==='GET') {

        res.status(200).json(experiances)
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed`});
    }
}