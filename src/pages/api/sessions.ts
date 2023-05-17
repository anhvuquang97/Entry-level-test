import type { NextApiRequest, NextApiResponse } from "next";
import { Session } from "@/interfaces";
import { ENTRY_LEVEL_BASE_URL } from "@/constants";

type Resp = {
  data: Session[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resp>
) {
  const { short_title: shortTitle, status } = req.query as {
    [key: string]: string;
  };

  const response = await fetch(`${ENTRY_LEVEL_BASE_URL}/test/sessions`);
  const data = await response.json();

  let dataResp = data;

  if (status) {
    dataResp = dataResp.filter((item: Session) =>
      status
        .split(",")
        ?.map((wrd: string) => wrd.toUpperCase())
        ?.includes(item?.status)
    );
  }

  if (shortTitle) {
    dataResp = dataResp.filter((item: Session) =>
      shortTitle?.split(",")?.includes(item?.program[0]?.short_title)
    );
  }

  dataResp = dataResp
    .sort(
      (a: Session, b: Session) =>
        new Date(b?.start_date).getTime() - new Date(a?.start_date).getTime()
    )
    .slice(0, 50);

  res.status(200).json({ data: dataResp });
}
