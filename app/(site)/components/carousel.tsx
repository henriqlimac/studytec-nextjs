import CollabCard from "./card";

const collabProps = [
  {
    id: 1,
    name: "Henrique Lima",
    at: "@henriqlimac",
    tags: 1,
    description: "Estudante da ETEC Maria Cristina Medeiros, 'Fullstack Web Developer' e principal desenvolvedor da plataforma StudyTec",
    networks: 1,
  },
  {
    id: 1,
    name: "Daniela Gaeta",
    at: "@danxvs_",
    tags: 3,
    description: "albçaçbabablablablala",
    networks: 3,
  },
  {
    id: 1,
    name: "Gustavo Reis",
    at: "@_reisgustavo",
    tags: 3,
    description: "blablablablalbalba",
    networks: 3,
  },
  {
    id: 1,
    name: "Camile Campos",
    at: "@camiille_campos",
    tags: 3,
    description: "blablablablalbalba",
    networks: 3,
  },
  {
    id: 1,
    name: "Gustavo Damaso",
    at: "@damaasoo",
    tags: 2,
    description: "blablablablalbalba",
    networks: 3,
  },
];

export default function Carousel() {
  return (
    <div className="flex gap-5 w-full justify-start 3xl:justify-center items-center overflow-x-scroll snap-x scrollbar-hide">
      <div className="flex basis-[min(100%, 350px)] gap-5 box-content mr-[15px] ml-[15px] w-[min(100%, 350px)]">
        {collabProps.map((props) => (
          <div className="flex flex-grow-1 items-center min-h-[500px]">
            <CollabCard
              key={props.id}
              name={props.name}
              tags={props.tags}
              at={props.at}
              description={props.description}
              networks={props.networks}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
