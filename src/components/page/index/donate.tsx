import { NextPage } from "next";

import KyashQRCode from "assets/images/kyash-qr.svg";

type Props = {
  bitcoin: string;
  ethereum: string;
  amazonWishList: string;
};

const Donate: NextPage<Props> = (props: Props) => {
  return (
    <div className="uk-text-center">
      <h2>Donate</h2>
      <div>
        <p>Kyash: </p>
        <KyashQRCode height="150" />
      </div>
      <p>
        Bitcoin: <code>{props.bitcoin}</code>
      </p>
      <p>
        Ethereum: <code>{props.ethereum}</code>
      </p>
      <p>
        <a
          href={props.amazonWishList}
          target="_blank"
          rel="noreferrer noopener"
        >
          AmazonWishList
        </a>
      </p>
    </div>
  );
};

export default Donate;
