import styled from "styled-components";

const EntryContainer = styled.section`
  margin: 16px;
  border: 1px solid #f00;
  border-radius: 8px;
`;
const EntryTitle = styled.h2`
  margin: 16px;
`;
const EntryImage = styled.figure`
  margin: 16px;
`;
const EntryBody = styled.div`
  border: 1px solid red;
`;

export default function Entry(props) {
  return (
    <EntryContainer>
      <EntryTitle>{props.entry.title}</EntryTitle>
      <EntryImage>
        <img src={props.entry.image?.url} alt="" />
      </EntryImage>
      <EntryBody dangerouslySetInnerHTML={{ __html: props.entry.body }} />
    </EntryContainer>
  );
}
