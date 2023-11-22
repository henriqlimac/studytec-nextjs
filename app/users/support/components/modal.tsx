import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Divider,
  Button,
  ModalHeader,
} from "@nextui-org/react";

interface PlanModalProps {
  title: string;
  text: string;
  isOpen: any;
  onOpenChange: any;
}

export default function SupportModal({
  title,
  text,
  isOpen,
  onOpenChange,
}: PlanModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      className="bg-primary border-1 border-border shadow-none"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-row gap-2">
              <strong className="text-base">P:</strong>
              <p className="text-base font-semibold">{title}</p>
            </ModalHeader>
            <Divider />
            <ModalBody className="flex flex-row py-4">
              <strong>R:</strong>
              <p>{text}</p>
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
