// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const API = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await res.unstable_revalidate('/')
  res.status(200).json({ name: 'John Doe' })
}

export default API
