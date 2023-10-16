import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { Article } from "../models/mockData";

interface Props {
    article: Article;
}

export default function ArticleCard({article}: Props) {
  return (
    <Card className="py-4 w-3/4">
      <CardBody className="overflow-visible py-4">
        <Image
          isZoomed
          alt="Card background"
          className="rounded-xl"
          src={article.image_url}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{article.author}</p>
        <small className="text-default-500">{article.body}</small>
        <h4 className="font-bold text-large">{article.title}</h4>
      </CardFooter>
    </Card>
  );
}
