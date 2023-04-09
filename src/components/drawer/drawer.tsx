import {
  Drawer, DrawerContent,
  DrawerCloseButton, DrawerBody, DrawerHeader,
  Input,
  useDisclosure
} from "@chakra-ui/react";

export default function WiserDrawer() {
  const { onClose } = useDisclosure();

  return (
    <>
      <Drawer size={'xs'} isOpen={false} placement="left" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
