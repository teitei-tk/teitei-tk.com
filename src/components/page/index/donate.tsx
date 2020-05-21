import { NextPage } from "next";
import { Code, Grid, Link, Row, Text, useTheme } from "@zeit-ui/react";

import KyashQRCode from "assets/images/kyash-qr.svg";

type Props = {
  bitcoin: string;
  ethereum: string;
  amazonWishList: string;
};

const Donate: NextPage<Props> = (props: Props) => {
  const theme = useTheme();

  return (
    <section>
      <div className="donate">
        <Row justify="center">
          <Text h2>Donate</Text>
        </Row>

        <Grid.Container
          gap={2}
          direction="column"
          wrap="wrap"
          alignItems="center"
          justify="center"
        >
          <Grid>
            <div className="kyash">
              <Text p>Kyash:</Text>
            </div>
            <KyashQRCode height="150" />
          </Grid>
          <Grid>
            <div>
              <div className="bitcoin">
                <Text p>BitCoin:</Text>
              </div>
              <div className="crypt">
                <Code>{props.bitcoin}</Code>
              </div>
            </div>
          </Grid>
          <Grid>
            <div>
              <div className="bitcoin">
                <Text p>Ethereum:</Text>
              </div>
              <div className="crypt">
                <Code>{props.ethereum}</Code>
              </div>
            </div>
          </Grid>
          <Grid>
            <div>
              <Link
                icon
                underline
                href={props.amazonWishList}
                target="_blank"
                rel="noreferrer noopener"
              >
                AmazonWishList
              </Link>
            </div>
          </Grid>
        </Grid.Container>
        <style jsx>
          {`
            .kyash {
              text-align: center;
            }
            .bitcoin {
              text-align: center;
            }
            .ethereum {
              text-align: center;
            }
            .crypt {
              padding: calc(${theme.layout.gap} / 2)
                calc(${theme.layout.gap} / 2);
              border-radius: 5px;
              border: 1px solid #eaeaea;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Donate;
