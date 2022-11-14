// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const response = await axios.post(
      `${ENDPOINT}/api/v1/wallets`,
      {
        address: req.body.userAddress,
        chain_id: "1",
        name: req.body.name,
      },
      {
        headers: {
          // @ts-ignore
          Authorization: req.headers.authorization,
        },
      }
    );
    res.send(response.data.data);
  } else {
    const response = await axios.get(`${ENDPOINT}/api/v1/wallets`, {
      headers: {
        // @ts-ignore
        Authorization: req.headers.authorization,
      },
    });

    res.send(response.data.data);
  }
}
