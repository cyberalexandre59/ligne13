import { NextApiRequest, NextApiResponse } from "next";
import { isAuthenticated } from "./login";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const userId = isAuthenticated(req);
    if (userId) {
        res.status(200).json({ authenticated: true });
    } else {
        res.status(401).json({ authenticated: false });
    }
}
