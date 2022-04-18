import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/Card/Card";
import { UserIconWithName } from "../../molecules/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;
  console.log("userCard");
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <div>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>website</dt>
        <dd>{user.website}</dd>
      </div>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
