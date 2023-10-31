import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {

    console.log(req.body)

    // return res.json({ massage: "working" })
    return NextResponse.json({massage:"working"})
}