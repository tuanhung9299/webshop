import React from "react";

import { AiFillFacebook, AiFillGithub, AiFillMail } from "react-icons/ai";

import {
  ContactPageContainer,
  ContactHeading,
  ContactName,
  TextContactHeading,
  ContactItemWrapper,
  ContactItem,
} from "./contact.styles";

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <ContactHeading>Hi !</ContactHeading>
      <ContactName>My name is Dao Tuan Hung</ContactName>
      <TextContactHeading>I'm a front-end Developer</TextContactHeading>

      <ContactItemWrapper>
        <ContactItem>
          <a
            className="facebook"
            href="https://www.facebook.com/hung.ba.184"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <h3>Facebook</h3>
          <p>facebook.com/hung.ba.184</p>
        </ContactItem>

        <ContactItem>
          <a
            className="github"
            href="https://github.com/tuanhung9299"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <h3>Github</h3>
          <p>github.com/tuanhung9299</p>
        </ContactItem>

        <ContactItem>
          <a
            className="gmail"
            href="tuanhung9299@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail />
          </a>
          <h3>E-mail</h3>
          <p>tuanhung9299@gmail.com</p>
        </ContactItem>
      </ContactItemWrapper>
    </ContactPageContainer>
  );
};

export default ContactPage;
