import { CircularProgress, Chip } from "@nextui-org/react";

interface ProgressBarProps {
  label: string;
  percentage: number;
  progress: number;
}

export default function Progress({
  label,
  percentage,
  progress,
}: ProgressBarProps) {
  return (
    <>
      <CircularProgress
        label={label}
        classNames={{
          svg: "w-52 h-36 drop-shadow-md",
          indicator: "stroke-blue",
          track: "stroke-blue/10",
          value: "text-3xl font-semibold text-typography",
        }}
        value={percentage}
        strokeWidth={4}
        showValueLabel={true}
      />
      <Chip
        classNames={{
          base: "border-1 border-typography/30",
          content: "text-typography/90 text-small font-semibold",
        }}
        variant="bordered"
      >
        {progress} vídeo(s) de 12
      </Chip>
    </>
  );
}
