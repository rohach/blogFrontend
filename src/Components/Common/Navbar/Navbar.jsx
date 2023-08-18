import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Input,
  DrawerFooter,
} from '@chakra-ui/react';
import React from 'react';
import './navbar.css';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="navbar">
      <div className="section">
        <Drawer
          isOpen={isOpen}
          // placement="full"
          size="full"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        {/* Navbar */}
        <nav>
          <div className="nav">
            <label htmlFor="name" className="site_name">
              Rohan.
            </label>
            <ul className="nav_ul">
              <li className="nav_links">
                <a href="/">Blog</a>
              </li>
              <li className="nav_links">
                <a href="/">About</a>
              </li>
              <li className="nav_links">
                <a href="/">Contact</a>
              </li>
              <li
                className="nav_links hamburger_menu"
                ref={btnRef}
                variant="ghost"
                onClick={onOpen}
              >
                <i className="ri-menu-2-line hamburger"></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
