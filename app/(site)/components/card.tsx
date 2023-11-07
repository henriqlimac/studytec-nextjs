import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Chip,
} from "@nextui-org/react";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

enum Tags {
  programmer = 1,
  designer = 2,
  writing = 3,
}

enum Networks {
  github = 1,
  twitter = 2,
  instagram = 3,
}

interface CardProps {
  name: string;
  at: string;
  tags: Tags;
  description: string;
  networks: Networks;
}

export default function CollabCard(props: CardProps) {
  return (
    <Card className="w-[350px] h-[450px] p-5 shadow-none border-slate-300 border-[0.5px]">
      <CardHeader className="flex flex-col items-start gap-5">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {props.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {props.at}
            </h5>
          </div>
        </div>
        <div className="tags flex gap-1">
          {props.tags == Tags.programmer ? (
            <Chip className="bg-violet-500 text-white text-xs">
              Programador
            </Chip>
          ) : null}
          {props.tags == Tags.designer ? (
            <Chip className="bg-violet-500 text-white text-xs">Designer</Chip>
          ) : null}
          {props.tags == Tags.writing ? (
            <Chip className="bg-violet-500 text-white text-xs">Escrita</Chip>
          ) : null}
        </div>
      </CardHeader>

      <CardBody>{props.description}</CardBody>

      <CardFooter className="flex justify-between">
        <p>Redes:</p>
        <div className="buttons flex gap-2">
          {props.networks == Networks.github ? (
            <Button isIconOnly className="bg-black text-white" radius="full">
              <AiOutlineGithub className="fill-white w-6 h-6" />
            </Button>
          ) : null}
          {props.networks == Networks.twitter ? (
            <Button isIconOnly className="bg-sky-500 text-white" radius="full">
              <AiOutlineTwitter className="fill-white w-6 h-6" />
            </Button>
          ) : null}
          {props.networks == Networks.instagram ? (
            <Button
              isIconOnly
              className="bg-violet-500 text-white"
              radius="full"
            >
              <AiOutlineInstagram className="fill-white w-6 h-6" />
            </Button>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
