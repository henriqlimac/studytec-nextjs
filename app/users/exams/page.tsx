import ExamCard from "./components/examcard";

const CardElements = [
  {
    id: 1,
    year: "2023",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202323718/Prova.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202323718/Gabarito.pdf",
  },
  {
    id: 2,
    year: "2022",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/2022027483/Prova.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/2022027483/Gabarito.pdf",
  },
  {
    id: 3,
    year: "2020",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202017430/Prova_1modulo.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202017430/Gabarito_1modulo-retificado.pdf",
  },
  {
    id: 3,
    year: "2019",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202017430/Prova_1modulo.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202017430/Gabarito_1modulo-retificado.pdf",
  },
  {
    id: 4,
    year: "2018",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201917532/Prova_1modulo.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201917532/Gabarito_1modulo.pdf",
  },
  {
    id: 5,
    year: "2017",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201816012/Prova_1modulo.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201816012/Gabarito_1modulo.pdf",
  },
  {
    id: 6,
    year: "2016",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201718301/Prova_1modulo.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201718301/Gabarito_1modulo.pdf",
  },
  {
    id: 7,
    year: "2015",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147534/Prova_1modulo.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147534/Gabarito_1modulo.pdf",
  },
  {
    id: 8,
    year: "2014",
    questions: "50",
    exam: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147208/Prova_1modulo.pdf",
    template:
      "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147208/Gabarito_1modulo_retificado.pdf",
  },
];

export default function Exams() {
  return (
    <div className="p-10 pt-16 w-full min-h-screen flex flex-col items-center justify-center gap-10">
      <div className="w-full max-w-[800px] flex flex-col justify-center items-center text-center xl:items-start xl:text-left gap-2">
        <h1 className="text-2xl font-semibold">
          Provas e Gabaritos (ETEC)
        </h1>
        <p>
          Ao clicar nos botões "Ver prova" e "Ver gabarito" você será
          redirecionado a uma outra página.
        </p>
      </div>
      <div className="w-full flex flex-col gap-7 max-w-[800px]">
        {CardElements.map((props) => (
          <>
            <ExamCard
              key={props.id}
              year={props.year}
              questions={props.questions}
              exam={props.exam}
              template={props.template}
            />
          </>
        ))}
      </div>
    </div>
  );
}
