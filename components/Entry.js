import styled from "styled-components";
import Link from "next/link";

const EntryContainer = styled.section`
  margin: 16px;
  border: 1px solid #f00;
  box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.2);
  border-radius: 8px;
`;

export default function Entry(props) {
  return (
    <EntryContainer>
      <h2>
        <Link href={`/entry/${props.entry.id}`}>
          <a>{props.entry.title}</a>
        </Link>
      </h2>
      {/* <h2>{props.entry.title}</h2> */}
      <figure>
        <img src={props.entry.image?.url} alt="" />
      </figure>
    </EntryContainer>
  );
}
