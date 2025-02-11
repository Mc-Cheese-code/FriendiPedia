import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import {BiAddToQueue} from "react-icons/bi"
import React from 'react'

const CreateUserModal = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
        <Button onClick={onOpen}>
            <BiAddToQueue size={20}/>
        </Button>

        <Modal
        isOpen={isOpen}
        onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>My new Buddy ⚓🤜🤛</ModalHeader>
                <ModalCloseButton/>

                <ModalBody pb={6}>
                    <Flex alignItems={"center"} gap={4}>
                        <FormControl>
                            <FormLabel>Full Name</FormLabel>
                            <Input placeholder='agent name'></Input>
                        </FormControl>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
  )
}

export default CreateUserModal