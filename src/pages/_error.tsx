import * as React from "react";
import { NextContext } from "next";
import { Segment } from "semantic-ui-react";

class Error extends React.Component<{ statusCode: number }> {
  private static getInitialProps({ res }: NextContext) {
    const statusCode = res ? res.statusCode : null;
    return { statusCode };
  }

  public render() {
    const { statusCode } = this.props;
    return (
      <Segment>
        <h1>{statusCode}</h1>
        {statusCode === 404 && "Litujeme, ale tato stránka neexistuje..."}
        {statusCode === 500 &&
          "Na serveru se stala chyba a je dočasně nedostupný"}
      </Segment>
    );
  }
}

export default Error;
