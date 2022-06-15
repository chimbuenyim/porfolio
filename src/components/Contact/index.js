import React from "react";
import { ContactDetailConfig } from "../../utils/Config/ContactConfig";
import { Button, Container, Title } from "../UniversalStyle";
import {
  ContactContent,
  ContactDetails,
  ContactMail,
  ContactWrapper,
  ContactDetailCard,
  ContactInfo,
  FormRow,
  Form,
} from "./styles";

const Contact = () => {
  return (
    <ContactWrapper>
      <Container>
        <Title>Get in Touch</Title>
        <ContactContent>
          <ContactDetails>
            <h3>{ContactDetailConfig.title}</h3>
            <p>{ContactDetailConfig.paragraph}</p>
            {ContactDetailConfig.details.map((detail) => (
              <ContactDetailCard key={detail.title}>
                <ContactInfo>{detail.icon}</ContactInfo>
                <ContactInfo>
                  <h4>{detail.title}</h4>
                  <p>{detail.content}</p>
                </ContactInfo>
              </ContactDetailCard>
            ))}
          </ContactDetails>
          <ContactMail>
            <h3>Message Me</h3>
            <Form>
              <FormRow>
                <input type={"text"} placeholder="Name" />
                <input type={"text"} placeholder="Email" />
              </FormRow>
              <FormRow>
                <input type={"text"} placeholder="Subject" />
              </FormRow>
              <FormRow>
                <textarea rows={3} placeholder={"Message"}></textarea>
              </FormRow>
              <FormRow>
                <Button>Send Message</Button>
              </FormRow>
            </Form>
          </ContactMail>
        </ContactContent>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
