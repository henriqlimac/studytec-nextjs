import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Link,
} from "@nextui-org/react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlanModalProps {
  matter: string;
  link1: string;
  link2: string;
  i1: string;
  i2: string;
  color: string;
  isOpen: any;
  onOpenChange: any;
}

export default function PlanModal({
  matter,
  link1,
  link2,
  i1,
  i2,
  color,
  isOpen,
  onOpenChange,
}: PlanModalProps) {
  return (
    <Modal
      key={matter}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      className="bg-secondary border-border shadow-none"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 uppercase">
              {matter}
            </ModalHeader>
            <ModalBody className="flex flex-row text-center">
              <div className="w-full flex flex-col items-center gap-2">
                <Link
                  className={`${color} bg-primary p-7 rounded-lg w-full flex items-center justify-center`}
                  href={link1}
                >
                  <BsFillPlayFill className="w-10 h-10" />
                </Link>
                {i1}
              </div>
              <div className="w-full flex flex-col items-center gap-2">
                <Link
                  className={`${color} bg-primary p-7 rounded-lg w-full flex items-center justify-center`}
                  href={link2}
                >
                  <BsFillPlayFill className="w-10 h-10" />
                </Link>
                {i2}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                fullWidth
                onPress={onClose}
                className="bg-blue text-white"
              >
                Fechar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
