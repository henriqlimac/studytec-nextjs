import CollabCard from "./card";
import "@/app/themes/scrollbar.css";

const collabProps = [
  {
    id: 1,
    image: "henriquelima",
    name: "Henrique Lima",
    at: "@henriqlimac",
    tag1: 1,
    tag2: 2,
    tag3: 0,
    description:
      "Estudante da ETEC Maria Cristina Medeiros, 'Fullstack Web Developer' e principal desenvolvedor da plataforma StudyTec",
    network1: 1,
    link1: "https://github.com/henriqlimac",
    network2: 2,
    link2: "https://twitter.com/darkinni",
    network3: 3,
    link3: "https://www.instagram.com/darkinnii/",
  },
  {
    id: 1,
    image: "danigaeta",
    name: "Daniela Gaeta",
    at: "@danxvs_",
    tag1: 0,
    tag2: 0,
    tag3: 3,
    description: "Estudante da ETEC Maria Cristina Medeiros",
    network1: 0,
    link1: "",
    network2: 0,
    link2: "",
    network3: 3,
    link3: "https://www.instagram.com/danxvs_",
  },
  {
    id: 1,
    image: "gustavoreis",
    name: "Gustavo Reis",
    at: "@_reisgustavo",
    tag1: 0,
    tag2: 0,
    tag3: 3,
    description: "Estudante da ETEC Maria Cristina Medeiros",
    network1: 0,
    link1: "",
    network2: 0,
    link2: "",
    network3: 3,
    link3: "https://www.instagram.com/_reisgustavo",
  },
  {
    id: 1,
    image: "camilecampos",
    name: "Camile Campos",
    at: "@camiille_campos",
    tag1: 0,
    tag2: 0,
    tag3: 3,
    description: "Estudante da ETEC Maria Cristina Medeiros",
    network1: 1,
    link1: "https://github.com/CaamileC",
    network2: 0,
    link2: "",
    network3: 3,
    link3: "https://www.instagram.com/camiille_campos",
  },
  {
    id: 1,
    image: "gustavodamaso",
    name: "Gustavo Damaso",
    at: "@damaasoo",
    tag1: 0,
    tag2: 0,
    tag3: 3,
    description: "Estudante da ETEC Maria Cristina Medeiros",
    network1: 0,
    link1: "",
    network2: 0,
    link2: "",
    network3: 3,
    link3: "https://www.instagram.com/damaasoo/",
  },
];

export default function Carousel() {
  return (
    <div className="flex gap-5 w-full justify-start 3xl:justify-center items-center overflow-x-scroll snap-x custom-scrollbar 3xl:scrollbar-hide">
      <div className="flex basis-[min(100%, 350px)] gap-5 box-content mr-[15px] ml-[15px] w-[min(100%, 350px)]">
        {collabProps.map((props) => (
          <div
            className="flex flex-grow-1 items-center min-h-[500px]"
            key={props.id}
          >
            <CollabCard
              name={props.name}
              image={props.image}
              tag1={props.tag1}
              tag2={props.tag2}
              tag3={props.tag3}
              at={props.at}
              description={props.description}
              network1={props.network1}
              link1={props.link1}
              network2={props.network2}
              link2={props.link2}
              network3={props.network3}
              link3={props.link3}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
