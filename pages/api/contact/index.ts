import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export type responseData = {
    status: boolean,
    message: string,
    content: string[],

}

const handler = async (req: NextApiRequest, res: NextApiResponse<responseData>) => {
    const value = { message: "greeting" }

    res.json({ status: false, message: "mail send successfully", content: ["done", "done"] })


    if (req.method == "POST") {

        const { email } = req.body
        console.log(email)
    }



}


export default handler