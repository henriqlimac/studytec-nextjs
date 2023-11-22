"use client";

import { Link, Button } from "@nextui-org/react";
import { BiChevronRight } from "react-icons/bi";

interface ExamCardProps {
  year: string;
  questions: string;
  exam: string;
  template: string;
}

export default function ExamCard({
  year,
  questions,
  exam,
  template,
}: ExamCardProps) {
  return (
    <div className="flex items-start flex-col md:flex-row md:items-center justify-between w-full bg-primary p-4 gap-4 rounded-lg border-border border-1">
      <div className="flex flex-col gap-2">
        <h2 className="border-l-blue border-l-4 pl-3">{year}</h2>
        <p className="opacity-50">{questions} questões</p>
      </div>
      <div className="w-full md:w-auto flex items-center gap-7">
        <Link href={exam} target="_blank" className="w-full md:w-auto">
          <Button className="bg-blue text-white w-full md:w-auto">
            Ver prova <BiChevronRight />
          </Button>
        </Link>
        <Link href={template} target="_blank" className="w-full">
          <Button
            className="border-blue text-typography w-full md:w-auto"
            variant="bordered"
          >
            Ver gabarito <BiChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
